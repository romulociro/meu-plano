import { MEALS, META, MEAL_COUNT, getMeal, getOption } from "./data/plan.js";
import {
  todayKey,
  formatLongDate,
  formatShortDate,
  weekdayLetter,
  addDays,
  monthMeta,
  lastNDates,
} from "./lib/dates.js";
import {
  getDay,
  upsertMeal,
  clearMeal,
  getSelectedOption,
  saveSelectedOption,
  loadCheckins,
} from "./lib/storage.js";

const ICONS = {
  sunrise: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 18h16M6.5 18a5.5 5.5 0 0 1 11 0M12 8V4M8 10l-2-2M16 10l2-2M4 14h2M18 14h2"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 19c8 0 14-8 14-16-8 0-16 6-16 14 3-1 6-2 9-5"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 3a8 8 0 1 0 5 13 7 7 0 0 1-5-13z"/></svg>`,
  leafMark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z"/><path d="M12 11v8"/></svg>`,
};

const STATUS = {
  conforme: { label: "Conforme o plano", chip: "No plano" },
  substituicao: { label: "Usou substituição", chip: "Substituição" },
  fora: { label: "Fora do plano", chip: "Fora" },
};

let route = "hoje";
let sheet = null;
let historyCursor = todayKey();
let selectedHistoryDay = todayKey();
let installEvent = null;

export function start() {
  window.addEventListener("hashchange", () => {
    sheet = null;
    render();
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installEvent = event;
    render();
  });
  render();
}

function currentRoute() {
  const hash = (location.hash || "#hoje").replace("#", "");
  if (["hoje", "plano", "historico"].includes(hash)) return hash;
  return "hoje";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function render() {
  route = currentRoute();
  const root = document.getElementById("app");
  root.innerHTML = `
    <div class="app-shell">
      ${route === "hoje" ? renderToday() : ""}
      ${route === "plano" ? renderPlan() : ""}
      ${route === "historico" ? renderHistory() : ""}
    </div>
    ${nav()}
    ${sheet ? renderSheet() : ""}
  `;
  bind();
}

function nav() {
  const item = (id, label, svg) => `
    <a href="#${id}" class="${route === id ? "active" : ""}" aria-current="${route === id ? "page" : "false"}">
      ${svg}
      ${label}
    </a>`;
  return `
    <nav class="nav" aria-label="Principal">
      <div class="nav-inner">
        ${item("hoje", "Hoje", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>`)}
        ${item("plano", "Plano", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v16H7zM7 8h10M7 12h10M7 16h6"/></svg>`)}
        ${item("historico", "Histórico", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>`)}
      </div>
    </nav>`;
}

function dayTone(day) {
  const values = MEALS.map((meal) => day[meal.id]?.status).filter(Boolean);
  if (!values.length) return "";
  if (values.length < MEAL_COUNT) return "partial";
  if (values.includes("fora")) return "fora";
  if (values.includes("substituicao")) return "substituicao";
  return "conforme";
}

function renderToday() {
  const date = todayKey();
  const day = getDay(date);
  const logged = MEALS.filter((meal) => day[meal.id]).length;
  const week = lastNDates(7, date);
  const allDone = logged === MEAL_COUNT;

  return `
    <header class="topbar">
      <div>
        <p class="kicker">${escapeHtml(formatLongDate())}</p>
        <h1 class="headline">Olá, ${escapeHtml(META.firstName)}</h1>
      </div>
      <div class="brand-mark" aria-hidden="true">${ICONS.leafMark}</div>
    </header>
    ${
      installEvent
        ? `<div class="install-banner show">
            <span>Instale o app na tela inicial do Android.</span>
            <button type="button" data-action="install">Instalar</button>
          </div>`
        : ""
    }
    ${
      allDone
        ? `<div class="complete-banner">
            <strong>Dia completo</strong>
            <div>As 4 refeições de hoje já foram registradas.</div>
          </div>`
        : ""
    }
    <section class="progress-card">
      <div class="progress-head">
        <strong>${logged} de ${MEAL_COUNT} refeições</strong>
        <span>${adherenceLabel(day)}</span>
      </div>
      <div class="track" aria-hidden="true">
        ${MEALS.map((meal) => `<span class="${day[meal.id]?.status ?? ""}"></span>`).join("")}
      </div>
      <div class="week-strip">
        ${week
          .map((iso) => {
            const tone = dayTone(getDay(iso));
            const isToday = iso === date;
            return `<button class="week-dot ${tone} ${isToday ? "is-today" : ""}" type="button" data-jump="${iso}" aria-label="${escapeHtml(formatShortDate(iso))}">
              <small>${escapeHtml(weekdayLetter(iso))}</small>
              <b></b>
            </button>`;
          })
          .join("")}
      </div>
    </section>
    ${MEALS.map((meal) => mealCard(meal, day[meal.id], date)).join("")}
    <p class="footer-meta">Plano de ${escapeHtml(META.nutritionist)}, ${escapeHtml(META.crn)}, prescrito em ${escapeHtml(META.prescribedLabel)}.</p>
  `;
}

function adherenceLabel(day) {
  const values = MEALS.map((meal) => day[meal.id]?.status).filter(Boolean);
  if (!values.length) return "Nada registrado";
  const ok = values.filter((status) => status !== "fora").length;
  return `${Math.round((ok / MEAL_COUNT) * 100)}% no plano`;
}

function mealCard(meal, entry, dateKey) {
  const optionId = entry?.optionId ?? getSelectedOption(meal.id, meal.options[0].id);
  const option = getOption(meal, optionId);
  const status = entry?.status;

  return `
    <article class="meal-card" data-meal="${meal.id}">
      <div class="meal-head">
        <div class="meal-title">
          <div class="meal-icon">${ICONS[meal.icon]}</div>
          <div>
            <h2>${escapeHtml(meal.name)}</h2>
            <p>${escapeHtml(meal.period)}${option.label ? ` · ${escapeHtml(option.label)}` : ""}</p>
          </div>
        </div>
        <span class="status-chip ${status ?? "pendente"}">${status ? STATUS[status].chip : "Pendente"}</span>
      </div>
      ${
        meal.options.length > 1
          ? `<div class="option-switch">
              ${meal.options
                .map(
                  (item) =>
                    `<button type="button" class="${item.id === option.id ? "active" : ""}" data-option="${item.id}" ${entry ? "disabled" : ""}>${escapeHtml(item.label)}</button>`,
                )
                .join("")}
            </div>`
          : ""
      }
      <ul class="food-list">
        ${option.foods
          .map((food) => {
            const used = entry?.substitutions?.[food.id];
            return `<li>
              <div class="food-row">
                <strong>${escapeHtml(food.name)}</strong>
                <span>${escapeHtml(food.quantity)}</span>
              </div>
              ${
                used
                  ? `<div class="note-pill" style="margin-top:8px">Substituiu por ${escapeHtml(used.name)} · ${escapeHtml(used.quantity)}</div>`
                  : ""
              }
              ${
                food.substitutions.length
                  ? `<button class="subs-toggle" type="button" data-toggle-subs="${food.id}">Ver substituições (${food.substitutions.length})</button>
                     <ul class="subs" hidden data-subs="${food.id}">
                       ${food.substitutions.map((sub) => `<li>${escapeHtml(sub.name)} — ${escapeHtml(sub.quantity)}</li>`).join("")}
                     </ul>`
                  : ""
              }
            </li>`;
          })
          .join("")}
      </ul>
      ${option.notes ? `<div class="note-pill">${escapeHtml(option.notes)}</div>` : ""}
      ${
        entry
          ? `<div class="logged-summary ${entry.status}">
              <strong>${STATUS[entry.status].label}</strong>
              ${entry.note ? `<div>${escapeHtml(entry.note)}</div>` : ""}
              ${
                entry.status === "substituicao" && entry.substitutions
                  ? `<ul>${Object.values(entry.substitutions)
                      .map((sub) => `<li>${escapeHtml(sub.foodName)} → ${escapeHtml(sub.name)} (${escapeHtml(sub.quantity)})</li>`)
                      .join("")}</ul>`
                  : ""
              }
              <button class="ghost" type="button" data-reset="${meal.id}">Limpar este registro</button>
            </div>`
          : `<div class="check-actions">
              <div class="row">
                <button class="check-btn conforme" type="button" data-check="conforme">Conforme o plano</button>
                <button class="check-btn substituicao" type="button" data-check="substituicao">Usou substituição</button>
                <button class="check-btn fora" type="button" data-check="fora">Fora do plano</button>
              </div>
            </div>`
      }
    </article>
  `;
}

function renderPlan() {
  return `
    <header class="topbar">
      <div>
        <p class="kicker">Prescrito em ${escapeHtml(META.prescribedLabel)}</p>
        <h1 class="headline">Seu plano</h1>
      </div>
      <div class="brand-mark" aria-hidden="true">${ICONS.leafMark}</div>
    </header>
    <p class="footer-meta" style="margin-top:0;margin-bottom:16px">
      ${escapeHtml(META.nutritionist)} · ${escapeHtml(META.title)} · ${escapeHtml(META.crn)}
    </p>
    ${MEALS.map((meal) => {
      return `<section class="plan-block">
        <h2>${escapeHtml(meal.name)}</h2>
        ${meal.options
          .map((option) => {
            const title = option.label ? `${meal.name} · ${option.label}` : meal.name;
            return `<article class="meal-card">
              ${meal.options.length > 1 ? `<p class="kicker">${escapeHtml(option.label)}</p>` : ""}
              <ul class="food-list">
                ${option.foods
                  .map(
                    (food) => `<li>
                      <div class="food-row">
                        <strong>${escapeHtml(food.name)}</strong>
                        <span>${escapeHtml(food.quantity)}</span>
                      </div>
                      ${
                        food.substitutions.length
                          ? `<button class="subs-toggle" type="button" data-toggle-subs="${food.id}">Substituições</button>
                             <ul class="subs" hidden data-subs="${food.id}">
                               ${food.substitutions.map((sub) => `<li>${escapeHtml(sub.name)} — ${escapeHtml(sub.quantity)}</li>`).join("")}
                             </ul>`
                          : `<p class="kicker" style="margin-top:6px">Sem substituição listada</p>`
                      }
                    </li>`,
                  )
                  .join("")}
              </ul>
              ${option.notes ? `<div class="note-pill">${escapeHtml(option.notes)}</div>` : ""}
            </article>`;
          })
          .join("")}
      </section>`;
    }).join("")}
  `;
}

function renderHistory() {
  const today = todayKey();
  const meta = monthMeta(historyCursor);
  const prefix = `${String(meta.year).padStart(4, "0")}-${String(meta.month).padStart(2, "0")}`;
  const all = loadCheckins();
  const week = lastNDates(7, today);
  const weekMeals = week.flatMap((iso) => MEALS.map((meal) => all[iso]?.[meal.id]?.status));
  const weekLogged = weekMeals.filter(Boolean).length;
  const weekOk = weekMeals.filter((status) => status && status !== "fora").length;
  const weekPct = weekLogged ? Math.round((weekOk / (MEAL_COUNT * 7)) * 100) : 0;
  const selected = selectedHistoryDay;
  const selectedDay = getDay(selected);

  const cells = [];
  for (let i = 0; i < meta.weekday; i += 1) cells.push(`<span class="cal-day empty"></span>`);
  for (let day = 1; day <= meta.lastDay; day += 1) {
    const iso = `${prefix}-${String(day).padStart(2, "0")}`;
    const tone = dayTone(getDay(iso));
    const isToday = iso === today;
    const selectedClass = iso === selected ? "selected" : "";
    cells.push(
      `<button type="button" class="cal-day ${tone} ${isToday ? "is-today" : ""} ${selectedClass}" data-jump="${iso}">${day}</button>`,
    );
  }

  return `
    <header class="topbar">
      <div>
        <p class="kicker">Adesão recente</p>
        <h1 class="headline">Histórico</h1>
      </div>
      <div class="brand-mark" aria-hidden="true">${ICONS.leafMark}</div>
    </header>
    <div class="stats">
      <article class="stat-card">
        <b>${weekPct}%</b>
        <span>No plano nos últimos 7 dias</span>
      </article>
      <article class="stat-card">
        <b>${weekLogged}/${MEAL_COUNT * 7}</b>
        <span>Refeições registradas na semana</span>
      </article>
    </div>
    <div class="month-nav">
      <button class="icon-btn" type="button" data-month="-1" aria-label="Mês anterior">‹</button>
      <h2>${escapeHtml(meta.label)}</h2>
      <button class="icon-btn" type="button" data-month="1" aria-label="Próximo mês">›</button>
    </div>
    <div class="legend">
      <span><i style="background:var(--green)"></i>Conforme</span>
      <span><i style="background:var(--amber)"></i>Substituição</span>
      <span><i style="background:var(--rose)"></i>Fora</span>
      <span><i style="background:var(--bg-deep)"></i>Incompleto</span>
    </div>
    <div class="calendar">
      ${["S", "T", "Q", "Q", "S", "S", "D"].map((d) => `<div class="dow">${d}</div>`).join("")}
      ${cells.join("")}
    </div>
    <section class="day-detail">
      <h3>${selected === today ? "Hoje" : escapeHtml(formatShortDate(selected))}</h3>
      ${
        MEALS.every((meal) => !selectedDay[meal.id])
          ? `<p class="empty">Nenhum check-in neste dia.</p>`
          : `<ul class="food-list">${MEALS.map((meal) => {
              const entry = selectedDay[meal.id];
              if (!entry) {
                return `<li><div class="food-row"><strong>${escapeHtml(meal.name)}</strong><span>Não registrado</span></div></li>`;
              }
              const option = getOption(meal, entry.optionId);
              return `<li>
                <div class="food-row">
                  <strong>${escapeHtml(meal.name)}</strong>
                  <span class="status-chip ${entry.status}">${STATUS[entry.status].chip}</span>
                </div>
                ${option.label ? `<p class="kicker">${escapeHtml(option.label)}</p>` : ""}
                ${entry.note ? `<p>${escapeHtml(entry.note)}</p>` : ""}
                ${
                  entry.substitutions
                    ? `<ul class="subs">${Object.values(entry.substitutions)
                        .map((sub) => `<li>${escapeHtml(sub.foodName)} → ${escapeHtml(sub.name)}</li>`)
                        .join("")}</ul>`
                    : ""
                }
              </li>`;
            }).join("")}</ul>`
      }
    </section>
  `;
}

function renderSheet() {
  if (sheet.type === "substituicao") return substitutionSheet();
  if (sheet.type === "fora") return offPlanSheet();
  return "";
}

function substitutionSheet() {
  const meal = getMeal(sheet.mealId);
  const option = getOption(meal, sheet.optionId);
  const swappable = option.foods.filter((food) => food.substitutions.length);
  return `
    <div class="sheet-backdrop" data-close-sheet>
      <div class="sheet" role="dialog" aria-labelledby="sheet-title">
        <div class="sheet-handle"></div>
        <h3 id="sheet-title">Qual substituição você usou?</h3>
        <p class="lead">${escapeHtml(meal.name)} · marque pelo menos um alimento trocado.</p>
        <form data-sub-form>
          ${swappable
            .map(
              (food) => `<fieldset class="food-pick">
                <span>${escapeHtml(food.name)}</span>
                <label class="choice"><input type="radio" name="${food.id}" value="" checked> Manteve ${escapeHtml(food.quantity)}</label>
                ${food.substitutions
                  .map(
                    (sub, index) =>
                      `<label class="choice"><input type="radio" name="${food.id}" value="${index}"> ${escapeHtml(sub.name)} — ${escapeHtml(sub.quantity)}</label>`,
                  )
                  .join("")}
              </fieldset>`,
            )
            .join("")}
          <div class="field">
            <label for="note">Nota (opcional)</label>
            <textarea id="note" name="note" maxlength="180" placeholder="Ex.: usei tilápia no lugar do frango"></textarea>
          </div>
          <p class="error" data-error hidden></p>
          <button class="primary" type="submit">Salvar check-in</button>
          <button class="ghost" type="button" data-close-sheet>Cancelar</button>
        </form>
      </div>
    </div>
  `;
}

function offPlanSheet() {
  const meal = getMeal(sheet.mealId);
  return `
    <div class="sheet-backdrop" data-close-sheet>
      <div class="sheet" role="dialog" aria-labelledby="sheet-title">
        <div class="sheet-handle"></div>
        <h3 id="sheet-title">Fora do plano</h3>
        <p class="lead">${escapeHtml(meal.name)} · se quiser, anote o que comeu.</p>
        <form data-off-form>
          <div class="field">
            <label for="note">Nota (opcional)</label>
            <textarea id="note" name="note" maxlength="180" placeholder="O que você comeu?"></textarea>
          </div>
          <button class="primary" type="submit">Salvar check-in</button>
          <button class="ghost" type="button" data-close-sheet>Cancelar</button>
        </form>
      </div>
    </div>
  `;
}

function bind() {
  document.querySelectorAll("[data-toggle-subs]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.toggleSubs;
      const list = button.parentElement.querySelector(`[data-subs="${id}"]`);
      if (!list) return;
      list.hidden = !list.hidden;
      button.textContent = list.hidden
        ? button.textContent.replace("Ocultar", "Ver").replace("Ocultar substituições", "Substituições")
        : button.textContent.startsWith("Ver")
          ? button.textContent.replace("Ver", "Ocultar")
          : "Ocultar substituições";
    });
  });

  document.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-meal]");
      saveSelectedOption(card.dataset.meal, button.dataset.option);
      render();
    });
  });

  document.querySelectorAll("[data-check]").forEach((button) => {
    button.addEventListener("click", () => {
      const mealId = button.closest("[data-meal]").dataset.meal;
      const meal = getMeal(mealId);
      const optionId = getSelectedOption(mealId, meal.options[0].id);
      if (button.dataset.check === "conforme") {
        upsertMeal(todayKey(), mealId, {
          status: "conforme",
          optionId,
          note: "",
          substitutions: null,
        });
        render();
        return;
      }
      sheet = { type: button.dataset.check, mealId, optionId };
      render();
    });
  });

  document.querySelectorAll("[data-reset]").forEach((button) => {
    button.addEventListener("click", () => {
      clearMeal(todayKey(), button.dataset.reset);
      render();
    });
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedHistoryDay = button.dataset.jump;
      if (route !== "historico") {
        location.hash = "#historico";
        return;
      }
      render();
    });
  });

  document.querySelectorAll("[data-month]").forEach((button) => {
    button.addEventListener("click", () => {
      const delta = Number(button.dataset.month);
      const meta = monthMeta(historyCursor);
      const next = new Date(Date.UTC(meta.year, meta.month - 1 + delta, 1, 12));
      historyCursor = next.toISOString().slice(0, 10);
      selectedHistoryDay = historyCursor;
      render();
    });
  });

  document.querySelectorAll("[data-close-sheet]").forEach((node) => {
    node.addEventListener("click", (event) => {
      if (event.target !== node && !node.matches("button")) return;
      if (node.classList.contains("sheet-backdrop") && event.target !== node) return;
      sheet = null;
      render();
    });
  });

  const subForm = document.querySelector("[data-sub-form]");
  if (subForm) {
    subForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const meal = getMeal(sheet.mealId);
      const option = getOption(meal, sheet.optionId);
      const data = new FormData(subForm);
      const substitutions = {};
      option.foods.forEach((food) => {
        if (!food.substitutions.length) return;
        const raw = data.get(food.id);
        if (raw === null || raw === "") return;
        const sub = food.substitutions[Number(raw)];
        if (!sub) return;
        substitutions[food.id] = { foodName: food.name, name: sub.name, quantity: sub.quantity };
      });
      const error = subForm.querySelector("[data-error]");
      if (!Object.keys(substitutions).length) {
        error.hidden = false;
        error.textContent = "Escolha pelo menos uma substituição.";
        return;
      }
      upsertMeal(todayKey(), sheet.mealId, {
        status: "substituicao",
        optionId: sheet.optionId,
        note: String(data.get("note") || "").trim(),
        substitutions,
      });
      sheet = null;
      render();
    });
  }

  const offForm = document.querySelector("[data-off-form]");
  if (offForm) {
    offForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(offForm);
      upsertMeal(todayKey(), sheet.mealId, {
        status: "fora",
        optionId: sheet.optionId,
        note: String(data.get("note") || "").trim(),
        substitutions: null,
      });
      sheet = null;
      render();
    });
  }

  const install = document.querySelector("[data-action='install']");
  if (install && installEvent) {
    install.addEventListener("click", async () => {
      installEvent.prompt();
      await installEvent.userChoice;
      installEvent = null;
      render();
    });
  }
}
