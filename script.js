let preguntaActual = 0;

let puntajes = {
  norris: 0,
  verstappen: 0,
  piastri: 0,
  leclerc: 0,
  hamilton: 0,
  alonso: 0,
  antonelli: 0,
  russell: 0,
  colapinto: 0,
  checo: 0
};
const preguntas = [
  {
    pregunta: "¿Qué te define más?",
    opciones: [
      {
        texto: "Arriesgado",
        puntos: ["verstappen", "alonso", "norris"]
      },
      {
        texto: "Estratégico",
        puntos: ["hamilton", "russell", "piastri", "antonelli"]
      }
    ]
  },
  {
    pregunta: "¿Cómo trabajas mejor?",
    opciones: [
      {
        texto: "En equipo",
        puntos: ["norris", "piastri", "colapinto", "antonelli"]
      },
      {
        texto: "Solo",
        puntos: ["leclerc", "alonso", "verstappen"]
      }
    ]
  },
  {
    pregunta: "¿Qué prefieres?",
    opciones: [
      {
        texto: "Velocidad",
        puntos: ["verstappen", "leclerc", "checo"]
      },
      {
        texto: "Precisión",
        puntos: ["russell", "hamilton"]
      }
    ]
  },
  {
    pregunta: "¿Cómo eres bajo presión?",
    opciones: [
      {
        texto: "Exploto",
        puntos: ["russell", "colapinto"]
      },
      {
        texto: "Me enfoco",
        puntos: ["alonso", "hamilton", "checo"]
      }
    ]
  },
  {
    pregunta: "¿Qué te representa más?",
    opciones: [
      {
        texto: "Carisma",
        puntos: ["norris", "checo", "leclerc", "colapinto"]
      },
      {
        texto: "Disciplina",
        puntos: ["antonelli", "piastri"]
      }
    ]
  }
];
const preguntaTexto = document.getElementById("pregunta");

const saludo= document.getElementById("saludo")
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
function cargarPregunta() {
  let p = preguntas[preguntaActual];

  preguntaTexto.innerText = p.pregunta;

  text1.innerText = p.opciones[0].texto;

  text2.innerText = p.opciones[1].texto;
}
document.getElementById("op1").addEventListener("click", () => elegir(0));
document.getElementById("op2").addEventListener("click", () => elegir(1));
function elegir(opcion) {
  let seleccion = preguntas[preguntaActual].opciones[opcion];

  seleccion.puntos.forEach(p => {
    puntajes[p]++;
  });

  preguntaActual++;

  if (preguntaActual < preguntas.length) {
    cargarPregunta();
  } else {
    mostrarResultado();
  }
}
const pilotos = {
  verstappen: {
    nombre: "Max Verstappen",
    imagen: "assets/max verstappen.avif",
    descripcion: "Eres agresivo y dominante."
  },
  norris: {
    nombre: "Lando Norris",
    imagen: "assets/Lando Norris.jpg",
    descripcion: "Eres carismático y divertido."
  },
  piastri: {
    nombre: "Oscar Piastri",
    imagen: "assets/Oscar piastri.jpg",
    descripcion: "Eres calmado, inteligente y siempre tienes el control."
  },
  leclerc: {
    nombre: "Charles Leclerc",
    imagen: "assets/Charles leclerc.png",
    descripcion: "Eres intenso, apasionado y perfeccionista."
  },
  hamilton: {
    nombre: "Lewis Hamilton",
    imagen: "assets/lewis hamilton.jpg",
    descripcion: "Eres disciplinado, elegante y con una mentalidad ganadora."
  },
  alonso: {
    nombre: "Fernando Alonso",
    imagen: "assets/fernando alonso.avif",
    descripcion: "Eres estratégico, astuto y extremadamente resiliente."
  },
  antonelli: {
    nombre: "Kimi Antonelli",
    imagen: "assets/Kimi Antonelli.webp",
    descripcion: "Eres joven, ambicioso y lleno de potencial."
  },
  russell: {
    nombre: "George Russell",
    imagen: "assets/george russell.webp",
    descripcion: "Eres metódico, inteligente y constante."
  },
  colapinto: {
    nombre: "Franco Colapinto",
    imagen: "assets/franco colapinto.webp",
    descripcion: "Eres espontáneo, seguro y con mucha actitud."
  },
  checo: {
    nombre: "Checo Perez",
    imagen: "assets/checo perez.jpg",
    descripcion: "Eres paciente, fuerte y leal."
  }
  
};
function mostrarResultado() {
  document.getElementById("opciones").style.display = "none";
  document.getElementById("pregunta").style.display = "none";
  document.getElementById("resultado").style.display = "block";

  let ganador = Object.keys(puntajes).reduce((a, b) =>
    puntajes[a] > puntajes[b] ? a : b
  );

  let piloto = pilotos[ganador];

  document.getElementById("nombrePiloto").innerText = piloto.nombre;
  document.getElementById("fotoResultado").src = piloto.imagen;
  document.getElementById("descripcion").innerText = piloto.descripcion;
}

let piloto = prompt ("¿Cuál es tu piloto fav?");
console.log (piloto);
//alert("Hola, " + piloto);

saludo.innerText= "Hola, "+ piloto;

cargarPregunta();