// Настройки Mini App: услуги, цены, график. Меняй здесь, остальной код трогать не нужно.
window.CONFIG = {
  address: "Nicaragua 5812, Palermo, Buenos Aires",
  mapUrl: "https://maps.google.com/?q=Nicaragua+5812,+Buenos+Aires",
  phone: "+54 9 11 2698-6688",
  whatsapp: "https://wa.me/5491126986688",
  telegram: "Alla_Physical_therapy_Massage_BA", // личный Telegram Аллы для живого общения
  payments: ["ARS", "RUB", "USDT"],

  // График: дни недели (0 = воскресенье … 6 = суббота) и часы начала сеанса
  workDays: [1, 2, 3, 4, 5, 6],
  hours: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
  daysAhead: 14,

  services: [
    {
      id: "deep",
      name: { ru: "Массаж глубоких тканей", es: "Masaje de tejido profundo", en: "Deep tissue massage" },
      desc: {
        ru: "Глубокая, но мягкая проработка напряжённых мышц",
        es: "Trabajo profundo pero suave de los músculos tensos",
        en: "Deep yet gentle work on tense muscles",
      },
      options: [{ min: 70, usd: 55 }, { min: 90, usd: 70 }, { min: 120, usd: 90 }],
    },
    {
      id: "therapy",
      name: {
        ru: "Терапевтический массаж",
        es: "Masaje terapéutico",
        en: "Therapeutic massage",
      },
      desc: {
        ru: "С техниками мануальной терапии",
        es: "Con técnicas de terapia manual",
        en: "With manual therapy techniques",
      },
      options: [{ min: 60, usd: 55 }, { min: 90, usd: 75 }],
    },
    {
      id: "prenatal",
      name: { ru: "Массаж для беременных", es: "Masaje para embarazadas", en: "Prenatal massage" },
      desc: {
        ru: "Специальная поддерживающая система: можно комфортно лежать на животе",
        es: "Sistema de apoyo especial: podés recostarte boca abajo con total comodidad",
        en: "Special support system lets you lie comfortably on your stomach",
      },
      options: [{ min: 70, usd: 55 }],
    },
    {
      id: "lymph",
      name: {
        ru: "Авторский лимфодренажный массаж",
        es: "Drenaje linfático de autor",
        en: "Signature lymphatic drainage",
      },
      desc: {
        ru: "Стимулирует лимфоток и глубоко расслабляет",
        es: "Estimula el flujo linfático y relaja profundamente",
        en: "Stimulates lymph flow and deeply relaxes",
      },
      options: [{ min: 120, usd: 90 }],
    },
    {
      id: "relax",
      name: { ru: "Расслабляющий массаж", es: "Masaje relajante", en: "Relaxing massage" },
      desc: {
        ru: "Снимает стресс и возвращает лёгкость",
        es: "Alivia el estrés y devuelve la ligereza",
        en: "Relieves stress and restores lightness",
      },
      options: [{ min: 70, usd: 50 }, { min: 90, usd: 65 }],
    },
    {
      id: "rehab",
      name: { ru: "Реабилитация", es: "Rehabilitación", en: "Rehabilitation" },
      desc: {
        ru: "ЛФК, мануальные техники, электромиостимуляция, ультразвуковая терапия",
        es: "Kinesiología, técnicas manuales, electroestimulación, ultrasonido",
        en: "Exercise therapy, manual techniques, EMS, ultrasound therapy",
      },
      options: [{ min: 60, usd: 55 }, { min: 90, usd: 75 }],
    },
  ],
};
