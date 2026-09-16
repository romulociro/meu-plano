/** Plano alimentar prescrito em 19/09/2025 — Nutricionista Felipe Gadêlha, CRN6 19914. */

export const META = {
  patient: "Rômulo Ciro Maia Lima",
  firstName: "Rômulo",
  nutritionist: "Felipe Gadêlha",
  title: "Nutricionista Clínico Esportivo",
  crn: "CRN6 19914",
  prescribedAt: "2025-09-19",
  prescribedLabel: "19 de setembro de 2025",
};

export const MEALS = [
  {
    id: "cafe",
    name: "Café da manhã",
    shortName: "Café",
    icon: "sunrise",
    period: "Manhã",
    options: [
      {
        id: "cafe-1",
        label: null,
        notes: "Adoçantes: Stevia (começar com poucas gotas e testar o paladar).",
        foods: [
          {
            id: "cafe-pao",
            name: "Pão integral",
            quantity: "2 fatias (50g)",
            substitutions: [
              { name: "Pão francês", quantity: "1 unidade (50g)" },
            ],
          },
          {
            id: "cafe-frango",
            name: "Peito de frango",
            quantity: "30g",
            substitutions: [],
          },
          {
            id: "cafe-leite",
            name: "Leite de vaca desnatado em pó",
            quantity: "10g",
            substitutions: [
              {
                name: "Leite de vaca desnatado",
                quantity: "0,5 copo americano duplo (120 ml)",
              },
              { name: "Iogurte zero", quantity: "1 unidade (100g)" },
            ],
          },
          {
            id: "cafe-whey",
            name: "Whey protein concentrado",
            quantity: "20g",
            substitutions: [],
          },
          {
            id: "cafe-mamao",
            name: "Mamão",
            quantity: "150g",
            substitutions: [{ name: "Morango", quantity: "200g" }],
          },
        ],
      },
    ],
  },
  {
    id: "almoco",
    name: "Almoço",
    shortName: "Almoço",
    icon: "sun",
    period: "Meio-dia",
    options: [
      {
        id: "almoco-1",
        label: null,
        notes: null,
        foods: [
          {
            id: "almoco-frango",
            name: "Peito de frango sem pele cozido",
            quantity: "1,2 filés médios (120g)",
            substitutions: [
              { name: "Patinho grelhado / filé mignon", quantity: "100g" },
              { name: "Filé de tilápia", quantity: "150g" },
              { name: "Moela de frango cozida", quantity: "120g" },
              {
                name: "Bisteca de porco assada / filé mignon suíno / lombo",
                quantity: "120g",
              },
            ],
          },
          {
            id: "almoco-arroz",
            name: "Arroz branco cozido",
            quantity: "4 colheres de sopa cheias (100g)",
            substitutions: [
              { name: "Macarrão cozido", quantity: "100g" },
              { name: "Batata-doce cozida", quantity: "128g" },
              { name: "Batata inglesa cozida", quantity: "200g" },
              { name: "Macaxeira cozida", quantity: "100g" },
            ],
          },
          {
            id: "almoco-uva",
            name: "Uva",
            quantity: "100g",
            substitutions: [
              { name: "Melão", quantity: "200g" },
              { name: "Banana", quantity: "1 unidade grande (55g)" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "lanche",
    name: "Lanche da tarde",
    shortName: "Lanche",
    icon: "leaf",
    period: "Tarde",
    options: [
      {
        id: "lanche-1",
        label: "Whey e fruta",
        notes: "Adoçantes: Stevia (começar com poucas gotas e testar o paladar).",
        foods: [
          {
            id: "lanche1-whey",
            name: "Whey protein concentrado",
            quantity: "20g",
            substitutions: [],
          },
          {
            id: "lanche1-leite",
            name: "Leite de vaca desnatado em pó",
            quantity: "10g",
            substitutions: [
              {
                name: "Leite de vaca desnatado",
                quantity: "0,5 copo americano duplo (120 ml)",
              },
              { name: "Iogurte zero", quantity: "1 unidade (100g)" },
            ],
          },
          {
            id: "lanche1-morango",
            name: "Morango",
            quantity: "100g",
            substitutions: [],
          },
          {
            id: "lanche1-mel",
            name: "Mel",
            quantity: "2 colheres de sopa rasas (30g)",
            substitutions: [],
          },
        ],
      },
      {
        id: "lanche-2",
        label: "Cuscuz e frango",
        notes: null,
        foods: [
          {
            id: "lanche2-cuscuz",
            name: "Cuscuz de milho",
            quantity: "45g",
            substitutions: [
              { name: "Pão integral", quantity: "1 fatia (25g)" },
              { name: "Pão francês", quantity: "30g" },
            ],
          },
          {
            id: "lanche2-frango",
            name: "Peito de frango assado",
            quantity: "40g",
            substitutions: [{ name: "Patinho moído", quantity: "40g" }],
          },
          {
            id: "lanche2-requeijao",
            name: "Requeijão light",
            quantity: "15g",
            substitutions: [],
          },
          {
            id: "lanche2-banana",
            name: "Banana",
            quantity: "1 unidade grande (55g)",
            substitutions: [
              { name: "Uva", quantity: "100g" },
              { name: "Melão", quantity: "200g" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "jantar",
    name: "Jantar",
    shortName: "Jantar",
    icon: "moon",
    period: "Noite",
    options: [
      {
        id: "jantar-1",
        label: "Arroz e frango",
        notes: null,
        foods: [
          {
            id: "jantar1-frango",
            name: "Peito de frango",
            quantity: "1,4 filés médios (140g)",
            substitutions: [
              { name: "Patinho grelhado / filé mignon", quantity: "110g" },
              { name: "Filé de tilápia", quantity: "190g" },
              { name: "Moela de frango cozida", quantity: "140g" },
              {
                name: "Bisteca de porco assada / filé mignon suíno / lombo",
                quantity: "140g",
              },
            ],
          },
          {
            id: "jantar1-arroz",
            name: "Arroz branco cozido",
            quantity: "3 colheres de sopa cheias (75g)",
            substitutions: [
              {
                name: "Macarrão cozido",
                quantity: "1,5 colheres de servir cheias (75g)",
              },
              { name: "Batata-doce cozida", quantity: "97,5g" },
              { name: "Batata inglesa cozida", quantity: "150g" },
              { name: "Macaxeira cozida", quantity: "75g" },
              { name: "Rap10", quantity: "1,5 unidades (60g)" },
              { name: "Cuscuz de milho", quantity: "60g" },
            ],
          },
          {
            id: "jantar1-banana",
            name: "Banana",
            quantity: "1 unidade grande (55g)",
            substitutions: [
              { name: "Laranja", quantity: "0,5 unidade média (90g)" },
              { name: "Tangerina", quantity: "0,5 unidade média (67,5g)" },
              { name: "Melancia", quantity: "1 fatia pequena (100g)" },
              { name: "Melão", quantity: "2 fatias pequenas (140g)" },
              { name: "Uva", quantity: "50g" },
              { name: "Kiwi", quantity: "1 unidade média (76g)" },
              { name: "Tâmara seca", quantity: "3 unidades (21g)" },
              { name: "Pera", quantity: "1 unidade média (110g)" },
              { name: "Abacaxi", quantity: "1 fatia média (75g)" },
            ],
          },
        ],
      },
      {
        id: "jantar-2",
        label: "Sanduíche",
        notes: null,
        foods: [
          {
            id: "jantar2-pao",
            name: "Pão de hambúrguer",
            quantity: "1 unidade (50g)",
            substitutions: [
              { name: "Pão integral", quantity: "2 fatias (49,1g)" },
              { name: "Cuscuz de milho", quantity: "80g" },
              { name: "Pão francês", quantity: "1 unidade (50g)" },
            ],
          },
          {
            id: "jantar2-frango",
            name: "Peito de frango assado",
            quantity: "100g",
            substitutions: [
              { name: "Patinho moído", quantity: "90g" },
              {
                name: "Patinho cru (para fazer discos congelados)",
                quantity: "160g",
              },
            ],
          },
          {
            id: "jantar2-requeijao",
            name: "Requeijão light",
            quantity: "15g",
            substitutions: [],
          },
          {
            id: "jantar2-melao",
            name: "Melão",
            quantity: "100g",
            substitutions: [
              { name: "Uva", quantity: "50g" },
              { name: "Banana", quantity: "1 unidade grande (55g)" },
            ],
          },
        ],
      },
    ],
  },
];

export function getMeal(id) {
  return MEALS.find((meal) => meal.id === id);
}

export function getOption(meal, optionId) {
  return meal.options.find((option) => option.id === optionId) ?? meal.options[0];
}

export const MEAL_COUNT = MEALS.length;
