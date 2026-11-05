(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const f={firstName:"Rômulo",nutritionist:"Felipe Gadêlha",title:"Nutricionista Clínico Esportivo",crn:"CRN6 19914",prescribedLabel:"19 de setembro de 2025"},p=[{id:"cafe",name:"Café da manhã",shortName:"Café",icon:"sunrise",period:"Manhã",options:[{id:"cafe-1",label:null,notes:"Adoçantes Stevia (começar com poucas gotas)",foods:[{id:"cafe-pao",name:"Pão integral",quantity:"3 fatias (75g)",substitutions:[{name:"Pão francês",quantity:"1,5 unidades (75g)"}]},{id:"cafe-frango",name:"Peito de frango",quantity:"80g",substitutions:[]},{id:"cafe-leite",name:"Leite de vaca desnatado em pó",quantity:"10g",substitutions:[{name:"Leite de vaca desnatado",quantity:"0,5 copo americano duplo (120 ml)"},{name:"Iogurte zero",quantity:"1 unidade (100g)"}]},{id:"cafe-mamao",name:"Mamão",quantity:"150g",substitutions:[{name:"Morango",quantity:"200g"}]},{id:"cafe-mel",name:"Mel",quantity:"1 colher de sopa rasa (15g)",substitutions:[]},{id:"cafe-creatina",name:"Creatina",quantity:"3g",substitutions:[]}]}]},{id:"almoco",name:"Almoço",shortName:"Almoço",icon:"sun",period:"Meio-dia",options:[{id:"almoco-1",label:null,notes:null,foods:[{id:"almoco-frango",name:"Peito de frango sem pele cozido",quantity:"80g",substitutions:[{name:"Patinho grelhado / filé mignon",quantity:"70g"},{name:"Filé de tilápia",quantity:"100g"},{name:"Moela de frango cozida",quantity:"80g"},{name:"Bisteca de porco assada / filé mignon suíno / lombo",quantity:"80g"}]},{id:"almoco-arroz",name:"Arroz branco cozido",quantity:"6 colheres de sopa cheias (150g)",substitutions:[{name:"Macarrão cozido",quantity:"150g"},{name:"Batata doce cozida",quantity:"192g"},{name:"Batata inglesa cozida",quantity:"300g"},{name:"Macaxeira cozida",quantity:"150g"}]},{id:"almoco-uva",name:"Uva",quantity:"100g",substitutions:[{name:"Melão",quantity:"200g"},{name:"Banana",quantity:"1 unidade grande (55g)"}]}]}]},{id:"lanche",name:"Lanche da tarde",shortName:"Lanche",icon:"leaf",period:"Tarde",options:[{id:"lanche-1",label:"Whey e fruta",notes:"Stevia",foods:[{id:"lanche1-whey",name:"Whey protein concentrado",quantity:"20g",substitutions:[]},{id:"lanche1-leite",name:"Leite de vaca desnatado em pó",quantity:"10g",substitutions:[{name:"Leite desnatado",quantity:"120 ml"},{name:"Iogurte zero",quantity:"100g"}]},{id:"lanche1-morango",name:"Morango",quantity:"100g",substitutions:[]},{id:"lanche1-mel",name:"Mel",quantity:"2 colheres de sopa rasas (30g)",substitutions:[]},{id:"lanche1-aveia",name:"Aveia em flocos finos",quantity:"20g",substitutions:[]}]},{id:"lanche-2",label:"Cuscuz e frango",notes:null,foods:[{id:"lanche2-cuscuz",name:"Cuscuz de milho",quantity:"80g",substitutions:[{name:"Pão integral",quantity:"2 fatias (50g)"},{name:"Pão francês",quantity:"50g"}]},{id:"lanche2-frango",name:"Peito de frango assado",quantity:"40g",substitutions:[{name:"Patinho moído",quantity:"40g"}]},{id:"lanche2-requeijao",name:"Requeijão light",quantity:"15g",substitutions:[]},{id:"lanche2-banana",name:"Banana",quantity:"1 unidade grande (55g)",substitutions:[{name:"Uva",quantity:"100g"},{name:"Melão",quantity:"200g"}]}]}]},{id:"jantar",name:"Jantar",shortName:"Jantar",icon:"moon",period:"Noite",options:[{id:"jantar-1",label:"Arroz e frango",notes:null,foods:[{id:"jantar1-frango",name:"Peito de frango",quantity:"1,2 filés médios (120g)",substitutions:[{name:"Patinho / filé mignon",quantity:"100g"},{name:"Tilápia",quantity:"160g"},{name:"Moela",quantity:"120g"},{name:"Bisteca / lombo suíno",quantity:"120g"}]},{id:"jantar1-arroz",name:"Arroz branco cozido",quantity:"8 colheres de sopa cheias (200g)",substitutions:[{name:"Macarrão",quantity:"200g"},{name:"Batata doce",quantity:"260g"},{name:"Batata inglesa",quantity:"400g"},{name:"Macaxeira",quantity:"200g"},{name:"Rap10",quantity:"4 unidades (160g)"},{name:"Cuscuz",quantity:"160g"}]},{id:"jantar1-banana",name:"Banana",quantity:"1 unidade grande (55g)",substitutions:[{name:"Laranja",quantity:"90g"},{name:"Tangerina",quantity:"67,5g"},{name:"Melancia",quantity:"100g"},{name:"Melão",quantity:"140g"},{name:"Uva",quantity:"50g"},{name:"Kiwi",quantity:"76g"},{name:"Tâmara seca",quantity:"21g (3 un)"},{name:"Pera",quantity:"110g"},{name:"Abacaxi",quantity:"75g"}]}]},{id:"jantar-2",label:"Sanduíche",notes:null,foods:[{id:"jantar2-pao",name:"Pão de hambúrguer",quantity:"1 unidade (50g)",substitutions:[{name:"Pão integral",quantity:"2 fatias (49,1g)"},{name:"Cuscuz",quantity:"80g"},{name:"Pão francês",quantity:"50g"}]},{id:"jantar2-frango",name:"Peito de frango assado",quantity:"100g",substitutions:[{name:"Patinho moído",quantity:"90g"},{name:"Patinho cru (discos)",quantity:"160g"}]},{id:"jantar2-requeijao",name:"Requeijão light",quantity:"15g",substitutions:[]},{id:"jantar2-banana",name:"Banana",quantity:"2 unidades grandes (110g)",substitutions:[{name:"Uva",quantity:"100g"},{name:"Melão",quantity:"200g"}]}]}]}];function j(t){return p.find(e=>e.id===t)}function D(t,e){return t.options.find(o=>o.id===e)??t.options[0]}const M=p.length,I="America/Sao_Paulo";function g(t=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:I,year:"numeric",month:"2-digit",day:"2-digit"}).format(t)}function _(t=new Date){const e=new Intl.DateTimeFormat("pt-BR",{timeZone:I,weekday:"long",day:"numeric",month:"long"}).format(t);return e.charAt(0).toUpperCase()+e.slice(1)}function N(t){const[e,o,a]=t.split("-").map(Number),n=new Date(Date.UTC(e,o-1,a,12));return new Intl.DateTimeFormat("pt-BR",{weekday:"short",day:"2-digit",month:"short"}).format(n)}function K(t){const[e,o,a]=t.split("-").map(Number),n=new Date(Date.UTC(e,o-1,a,12));return new Intl.DateTimeFormat("pt-BR",{weekday:"narrow"}).format(n)}function Q(t,e){const[o,a,n]=t.split("-").map(Number);return new Date(Date.UTC(o,a-1,n+e,12)).toISOString().slice(0,10)}function O(t){const[e,o]=t.split("-").map(Number),a=new Date(Date.UTC(e,o-1,1,12)),n=new Date(Date.UTC(e,o,0,12)).getUTCDate(),s=(a.getUTCDay()+6)%7,r=new Intl.DateTimeFormat("pt-BR",{month:"long",year:"numeric"}).format(a);return{year:e,month:o,lastDay:n,weekday:s,label:r.charAt(0).toUpperCase()+r.slice(1)}}function T(t,e=g()){return Array.from({length:t},(o,a)=>Q(e,a-(t-1)))}const B="plano-romulo:checkins:v1",z="plano-romulo:prefs:v1";function F(t,e){try{const o=localStorage.getItem(t);return o?JSON.parse(o):e}catch{return e}}function U(t,e){localStorage.setItem(t,JSON.stringify(e))}function L(){const t=F(B,{});return t&&typeof t=="object"?t:{}}function R(t){U(B,t)}function C(t){return L()[t]??{}}function P(t,e,o){const a=L(),n={...a[t]??{}};return n[e]={...o,updatedAt:new Date().toISOString()},a[t]=n,R(a),n[e]}function Z(t,e){const o=L(),a={...o[t]??{}};delete a[e],Object.keys(a).length===0?delete o[t]:o[t]=a,R(o)}function H(){return{selectedOptions:{},...F(z,{})}}function Y(t,e){const o=H();o.selectedOptions={...o.selectedOptions,[t]:e},U(z,o)}function J(t,e){var o;return((o=H().selectedOptions)==null?void 0:o[t])??e}const E={sunrise:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 18h16M6.5 18a5.5 5.5 0 0 1 11 0M12 8V4M8 10l-2-2M16 10l2-2M4 14h2M18 14h2"/></svg>',sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>',leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 19c8 0 14-8 14-16-8 0-16 6-16 14 3-1 6-2 9-5"/></svg>',moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 3a8 8 0 1 0 5 13 7 7 0 0 1-5-13z"/></svg>',leafMark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z"/><path d="M12 11v8"/></svg>'},x={conforme:{label:"Conforme o plano",chip:"No plano"},substituicao:{label:"Usou substituição",chip:"Substituição"},fora:{label:"Fora do plano",chip:"Fora"}};let q="hoje",c=null,S=g(),A=g(),w=null;function G(){window.addEventListener("hashchange",()=>{c=null,m()}),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),w=t,m()}),m()}function X(){const t=(location.hash||"#hoje").replace("#","");return["hoje","plano","historico"].includes(t)?t:"hoje"}function i(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function m(){q=X();const t=document.getElementById("app");t.innerHTML=`
    <div class="app-shell">
      ${q==="hoje"?et():""}
      ${q==="plano"?ot():""}
      ${q==="historico"?st():""}
    </div>
    ${tt()}
    ${c?it():""}
  `,ct()}function tt(){const t=(e,o,a)=>`
    <a href="#${e}" class="${q===e?"active":""}" aria-current="${q===e?"page":"false"}">
      ${a}
      ${o}
    </a>`;return`
    <nav class="nav" aria-label="Principal">
      <div class="nav-inner">
        ${t("hoje","Hoje",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>')}
        ${t("plano","Plano",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v16H7zM7 8h10M7 12h10M7 16h6"/></svg>')}
        ${t("historico","Histórico",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>')}
      </div>
    </nav>`}function V(t){const e=p.map(o=>{var a;return(a=t[o.id])==null?void 0:a.status}).filter(Boolean);return e.length?e.length<M?"partial":e.includes("fora")?"fora":e.includes("substituicao")?"substituicao":"conforme":""}function et(){const t=g(),e=C(t),o=p.filter(s=>e[s.id]).length,a=T(7,t),n=o===M;return`
    <header class="topbar">
      <div>
        <p class="kicker">${i(_())}</p>
        <h1 class="headline">Olá, ${i(f.firstName)}</h1>
      </div>
      <div class="brand-mark" aria-hidden="true">${E.leafMark}</div>
    </header>
    ${w?`<div class="install-banner show">
            <span>Instale o app na tela inicial do Android.</span>
            <button type="button" data-action="install">Instalar</button>
          </div>`:""}
    ${n?`<div class="complete-banner">
            <strong>Dia completo</strong>
            <div>As 4 refeições de hoje já foram registradas.</div>
          </div>`:""}
    <section class="progress-card">
      <div class="progress-head">
        <strong>${o} de ${M} refeições</strong>
        <span>${at(e)}</span>
      </div>
      <div class="track" aria-hidden="true">
        ${p.map(s=>{var r;return`<span class="${((r=e[s.id])==null?void 0:r.status)??""}"></span>`}).join("")}
      </div>
      <div class="week-strip">
        ${a.map(s=>`<button class="week-dot ${V(C(s))} ${s===t?"is-today":""}" type="button" data-jump="${s}" aria-label="${i(N(s))}">
              <small>${i(K(s))}</small>
              <b></b>
            </button>`).join("")}
      </div>
    </section>
    ${p.map(s=>nt(s,e[s.id])).join("")}
    <p class="footer-meta">Plano de ${i(f.nutritionist)}, ${i(f.crn)}, prescrito em ${i(f.prescribedLabel)}.</p>
  `}function at(t){const e=p.map(a=>{var n;return(n=t[a.id])==null?void 0:n.status}).filter(Boolean);if(!e.length)return"Nada registrado";const o=e.filter(a=>a!=="fora").length;return`${Math.round(o/M*100)}% no plano`}function nt(t,e,o){const a=(e==null?void 0:e.optionId)??J(t.id,t.options[0].id),n=D(t,a),s=e==null?void 0:e.status;return`
    <article class="meal-card" data-meal="${t.id}">
      <div class="meal-head">
        <div class="meal-title">
          <div class="meal-icon">${E[t.icon]}</div>
          <div>
            <h2>${i(t.name)}</h2>
            <p>${i(t.period)}${n.label?` · ${i(n.label)}`:""}</p>
          </div>
        </div>
        <span class="status-chip ${s??"pendente"}">${s?x[s].chip:"Pendente"}</span>
      </div>
      ${t.options.length>1?`<div class="option-switch">
              ${t.options.map(r=>`<button type="button" class="${r.id===n.id?"active":""}" data-option="${r.id}" ${e?"disabled":""}>${i(r.label)}</button>`).join("")}
            </div>`:""}
      <ul class="food-list">
        ${n.foods.map(r=>{var b;const h=(b=e==null?void 0:e.substitutions)==null?void 0:b[r.id];return`<li>
              <div class="food-row">
                <strong>${i(r.name)}</strong>
                <span>${i(r.quantity)}</span>
              </div>
              ${h?`<div class="note-pill" style="margin-top:8px">Substituiu por ${i(h.name)} · ${i(h.quantity)}</div>`:""}
              ${r.substitutions.length?`<button class="subs-toggle" type="button" data-toggle-subs="${r.id}">Ver substituições (${r.substitutions.length})</button>
                     <ul class="subs" hidden data-subs="${r.id}">
                       ${r.substitutions.map(d=>`<li>${i(d.name)} — ${i(d.quantity)}</li>`).join("")}
                     </ul>`:""}
            </li>`}).join("")}
      </ul>
      ${n.notes?`<div class="note-pill">${i(n.notes)}</div>`:""}
      ${e?`<div class="logged-summary ${e.status}">
              <strong>${x[e.status].label}</strong>
              ${e.note?`<div>${i(e.note)}</div>`:""}
              ${e.status==="substituicao"&&e.substitutions?`<ul>${Object.values(e.substitutions).map(r=>`<li>${i(r.foodName)} → ${i(r.name)} (${i(r.quantity)})</li>`).join("")}</ul>`:""}
              <button class="ghost" type="button" data-reset="${t.id}">Limpar este registro</button>
            </div>`:`<div class="check-actions">
              <div class="row">
                <button class="check-btn conforme" type="button" data-check="conforme">Conforme o plano</button>
                <button class="check-btn substituicao" type="button" data-check="substituicao">Usou substituição</button>
                <button class="check-btn fora" type="button" data-check="fora">Fora do plano</button>
              </div>
            </div>`}
    </article>
  `}function ot(){return`
    <header class="topbar">
      <div>
        <p class="kicker">Prescrito em ${i(f.prescribedLabel)}</p>
        <h1 class="headline">Seu plano</h1>
      </div>
      <div class="brand-mark" aria-hidden="true">${E.leafMark}</div>
    </header>
    <p class="footer-meta" style="margin-top:0;margin-bottom:16px">
      ${i(f.nutritionist)} · ${i(f.title)} · ${i(f.crn)}
    </p>
    ${p.map(t=>`<section class="plan-block">
        <h2>${i(t.name)}</h2>
        ${t.options.map(e=>(e.label?`${t.name}${e.label}`:t.name,`<article class="meal-card">
              ${t.options.length>1?`<p class="kicker">${i(e.label)}</p>`:""}
              <ul class="food-list">
                ${e.foods.map(o=>`<li>
                      <div class="food-row">
                        <strong>${i(o.name)}</strong>
                        <span>${i(o.quantity)}</span>
                      </div>
                      ${o.substitutions.length?`<button class="subs-toggle" type="button" data-toggle-subs="${o.id}">Substituições</button>
                             <ul class="subs" hidden data-subs="${o.id}">
                               ${o.substitutions.map(a=>`<li>${i(a.name)} — ${i(a.quantity)}</li>`).join("")}
                             </ul>`:'<p class="kicker" style="margin-top:6px">Sem substituição listada</p>'}
                    </li>`).join("")}
              </ul>
              ${e.notes?`<div class="note-pill">${i(e.notes)}</div>`:""}
            </article>`)).join("")}
      </section>`).join("")}
  `}function st(){const t=g(),e=O(S),o=`${String(e.year).padStart(4,"0")}-${String(e.month).padStart(2,"0")}`,a=L(),s=T(7,t).flatMap(l=>p.map(u=>{var y,$;return($=(y=a[l])==null?void 0:y[u.id])==null?void 0:$.status})),r=s.filter(Boolean).length,h=s.filter(l=>l&&l!=="fora").length,b=r?Math.round(h/(M*7)*100):0,d=A,k=C(d),v=[];for(let l=0;l<e.weekday;l+=1)v.push('<span class="cal-day empty"></span>');for(let l=1;l<=e.lastDay;l+=1){const u=`${o}-${String(l).padStart(2,"0")}`,y=V(C(u)),$=u===t,W=u===d?"selected":"";v.push(`<button type="button" class="cal-day ${y} ${$?"is-today":""} ${W}" data-jump="${u}">${l}</button>`)}return`
    <header class="topbar">
      <div>
        <p class="kicker">Adesão recente</p>
        <h1 class="headline">Histórico</h1>
      </div>
      <div class="brand-mark" aria-hidden="true">${E.leafMark}</div>
    </header>
    <div class="stats">
      <article class="stat-card">
        <b>${b}%</b>
        <span>No plano nos últimos 7 dias</span>
      </article>
      <article class="stat-card">
        <b>${r}/${M*7}</b>
        <span>Refeições registradas na semana</span>
      </article>
    </div>
    <div class="month-nav">
      <button class="icon-btn" type="button" data-month="-1" aria-label="Mês anterior">‹</button>
      <h2>${i(e.label)}</h2>
      <button class="icon-btn" type="button" data-month="1" aria-label="Próximo mês">›</button>
    </div>
    <div class="legend">
      <span><i style="background:var(--green)"></i>Conforme</span>
      <span><i style="background:var(--amber)"></i>Substituição</span>
      <span><i style="background:var(--rose)"></i>Fora</span>
      <span><i style="background:var(--bg-deep)"></i>Incompleto</span>
    </div>
    <div class="calendar">
      ${["S","T","Q","Q","S","S","D"].map(l=>`<div class="dow">${l}</div>`).join("")}
      ${v.join("")}
    </div>
    <section class="day-detail">
      <h3>${d===t?"Hoje":i(N(d))}</h3>
      ${p.every(l=>!k[l.id])?'<p class="empty">Nenhum check-in neste dia.</p>':`<ul class="food-list">${p.map(l=>{const u=k[l.id];if(!u)return`<li><div class="food-row"><strong>${i(l.name)}</strong><span>Não registrado</span></div></li>`;const y=D(l,u.optionId);return`<li>
                <div class="food-row">
                  <strong>${i(l.name)}</strong>
                  <span class="status-chip ${u.status}">${x[u.status].chip}</span>
                </div>
                ${y.label?`<p class="kicker">${i(y.label)}</p>`:""}
                ${u.note?`<p>${i(u.note)}</p>`:""}
                ${u.substitutions?`<ul class="subs">${Object.values(u.substitutions).map($=>`<li>${i($.foodName)} → ${i($.name)}</li>`).join("")}</ul>`:""}
              </li>`}).join("")}</ul>`}
    </section>
  `}function it(){return c.type==="substituicao"?rt():c.type==="fora"?lt():""}function rt(){const t=j(c.mealId),o=D(t,c.optionId).foods.filter(a=>a.substitutions.length);return`
    <div class="sheet-backdrop" data-close-sheet>
      <div class="sheet" role="dialog" aria-labelledby="sheet-title">
        <div class="sheet-handle"></div>
        <h3 id="sheet-title">Qual substituição você usou?</h3>
        <p class="lead">${i(t.name)} · marque pelo menos um alimento trocado.</p>
        <form data-sub-form>
          ${o.map(a=>`<fieldset class="food-pick">
                <span>${i(a.name)}</span>
                <label class="choice"><input type="radio" name="${a.id}" value="" checked> Manteve ${i(a.quantity)}</label>
                ${a.substitutions.map((n,s)=>`<label class="choice"><input type="radio" name="${a.id}" value="${s}"> ${i(n.name)} — ${i(n.quantity)}</label>`).join("")}
              </fieldset>`).join("")}
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
  `}function lt(){const t=j(c.mealId);return`
    <div class="sheet-backdrop" data-close-sheet>
      <div class="sheet" role="dialog" aria-labelledby="sheet-title">
        <div class="sheet-handle"></div>
        <h3 id="sheet-title">Fora do plano</h3>
        <p class="lead">${i(t.name)} · se quiser, anote o que comeu.</p>
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
  `}function ct(){document.querySelectorAll("[data-toggle-subs]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.toggleSubs,s=a.parentElement.querySelector(`[data-subs="${n}"]`);s&&(s.hidden=!s.hidden,a.textContent=s.hidden?a.textContent.replace("Ocultar","Ver").replace("Ocultar substituições","Substituições"):a.textContent.startsWith("Ver")?a.textContent.replace("Ver","Ocultar"):"Ocultar substituições")})}),document.querySelectorAll("[data-option]").forEach(a=>{a.addEventListener("click",()=>{const n=a.closest("[data-meal]");Y(n.dataset.meal,a.dataset.option),m()})}),document.querySelectorAll("[data-check]").forEach(a=>{a.addEventListener("click",()=>{const n=a.closest("[data-meal]").dataset.meal,s=j(n),r=J(n,s.options[0].id);if(a.dataset.check==="conforme"){P(g(),n,{status:"conforme",optionId:r,note:"",substitutions:null}),m();return}c={type:a.dataset.check,mealId:n,optionId:r},m()})}),document.querySelectorAll("[data-reset]").forEach(a=>{a.addEventListener("click",()=>{Z(g(),a.dataset.reset),m()})}),document.querySelectorAll("[data-jump]").forEach(a=>{a.addEventListener("click",()=>{if(A=a.dataset.jump,q!=="historico"){location.hash="#historico";return}m()})}),document.querySelectorAll("[data-month]").forEach(a=>{a.addEventListener("click",()=>{const n=Number(a.dataset.month),s=O(S);S=new Date(Date.UTC(s.year,s.month-1+n,1,12)).toISOString().slice(0,10),A=S,m()})}),document.querySelectorAll("[data-close-sheet]").forEach(a=>{a.addEventListener("click",n=>{n.target!==a&&!a.matches("button")||a.classList.contains("sheet-backdrop")&&n.target!==a||(c=null,m())})});const t=document.querySelector("[data-sub-form]");t&&t.addEventListener("submit",a=>{a.preventDefault();const n=j(c.mealId),s=D(n,c.optionId),r=new FormData(t),h={};s.foods.forEach(d=>{if(!d.substitutions.length)return;const k=r.get(d.id);if(k===null||k==="")return;const v=d.substitutions[Number(k)];v&&(h[d.id]={foodName:d.name,name:v.name,quantity:v.quantity})});const b=t.querySelector("[data-error]");if(!Object.keys(h).length){b.hidden=!1,b.textContent="Escolha pelo menos uma substituição.";return}P(g(),c.mealId,{status:"substituicao",optionId:c.optionId,note:String(r.get("note")||"").trim(),substitutions:h}),c=null,m()});const e=document.querySelector("[data-off-form]");e&&e.addEventListener("submit",a=>{a.preventDefault();const n=new FormData(e);P(g(),c.mealId,{status:"fora",optionId:c.optionId,note:String(n.get("note")||"").trim(),substitutions:null}),c=null,m()});const o=document.querySelector("[data-action='install']");o&&w&&o.addEventListener("click",async()=>{w.prompt(),await w.userChoice,w=null,m()})}G();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
