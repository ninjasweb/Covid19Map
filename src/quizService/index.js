const qBank = [
  {
    question:
      "¿Tienes sensación de falta de aire de inicio brusco (en ausencia de cualquier otra patología que justifique este síntoma)?",
    answers: ["SI", "NO"],
    scoremark: 60,
    questionId: "001"
  },
  {
    question:
      '¿Tienes fiebre? Mayor a:  (+37.7ºC)?',
    answers: ["SI", "NO"],
    scoremark: 15,
    questionId: "002"
  },
  {
    question:
      '¿Tienes tos seca y persistente?',
    answers: ["SI", "NO"],
    scoremark: 15,
    questionId: "003"
  },
  {
    question:
      '¿Has tenido contacto estrecho con algún paciente positivo confirmado?',
    answers: ["SI", "NO"],
    scoremark: 29,
    questionId: "004"
  },
  {
    question:
      '¿Tienes mucosidad en la nariz?',
    answers: ["SI", "NO"],
    scoremark: 0,
    questionId: "005"
  },
  {
    question:
      '¿Tienes dolor muscular?',
    answers: ["SI", "NO"],
    scoremark: 0,
    questionId: "006"
  },
  {
    question:
      '¿Tienes sintomatología gastrointestinal?',
    answers: ["SI", "NO"],
    scoremark: 0,
    questionId: "007"
  },
  {
    question:
      '¿Llevas más de 20 días con estos síntomas?',
    answers: ["SI", "NO"],
    scoremark: -15,
    questionId: "008"
  }
];

export default (n = 8) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
