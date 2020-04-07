# Covid19Map
#TEST DE AUTOEVALUACIÓN DE SÍNTOMAS DEL COVID-19
Este test es un auto-diagnostico de los principales síntomas de Covid-19 enfermedad causada por el Coronavirus (Covid-Sars-2), no sustituye ni pretende sustituir, en ningún caso, el consejo de un profesional médico.

# Metodología
Las preguntas, y sus puntuaciones por contestar con un "Sí", son las siguientes:

    ¿Tienes sensación de falta de aire de inicio brusco (en ausencia de cualquier otra patología que justifique este síntoma)? 60 puntos
    ¿Tienes fiebre? (+37.7ºC) 15 puntos
    ¿Tienes tos seca y persistente? 15 puntos
    ¿Has tenido contacto estrecho con algún paciente positivo confirmado? 29 puntos
    ¿Tienes mucosidad en la nariz? 0 puntos
    ¿Tienes dolor muscular?: 0 puntos
    ¿Tienes sintomatología gastrointestinal? 0 puntos
    ¿Llevas más de 20 días con estos síntomas? -15 puntos

# Cuestionario

Preguntas con su respectiva puntuación.

```
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

```

Tomadas de referencia del sitio: https://www.coronamadrid.com/ Una inciativa de Comunidad de Madrid. 


Este es un proyecto de código libre y abierto a colaboración. Los datos personales son totalmente anónimos. 


Desarrollo: https://ninjasweb.com/
