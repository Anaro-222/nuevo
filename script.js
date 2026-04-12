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
        puntos: ["verstappen", "alonso"]
      },
      {
        texto: "Estratégico",
        puntos: ["hamilton", "russell"]
      }
    ]
  },
  {
    pregunta: "¿Cómo trabajas mejor?",
    opciones: [
      {
        texto: "En equipo",
        puntos: ["norris", "piastri"]
      },
      {
        texto: "Solo",
        puntos: ["leclerc", "alonso"]
      }
    ]
  },
  {
    pregunta: "¿Qué prefieres?",
    opciones: [
      {
        texto: "Velocidad",
        puntos: ["verstappen", "leclerc"]
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
        puntos: ["checo", "colapinto"]
      },
      {
        texto: "Me enfoco",
        puntos: ["alonso", "verstappen"]
      }
    ]
  },
  {
    pregunta: "¿Qué te representa más?",
    opciones: [
      {
        texto: "Carisma",
        puntos: ["norris", "checo"]
      },
      {
        texto: "Disciplina",
        puntos: ["antonelli", "russell"]
      }
    ]
  }
];
const preguntaTexto = document.getElementById("pregunta");

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
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres carismático y divertido."
  },
  piastri: {
    nombre: "Oscar Piastri",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres agresivo y dominante."
  },
  leclerc: {
    nombre: "Charles Leclerc",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres carismático y divertido."
  },
  hamilton: {
    nombre: "Lewis Hamilton",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres agresivo y dominante."
  },
  alonso: {
    nombre: "Fernando Alonso",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres carismático y divertido."
  },
  antonelli: {
    nombre: "Kimi Antonelli",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres agresivo y dominante."
  },
  russell: {
    nombre: "George Russell",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres carismático y divertido."
  },
  colapinto: {
    nombre: "Franco Colapinto",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres agresivo y dominante."
  },
  checo: {
    nombre: "Checo Perez",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Eres carismático y divertido."
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
cargarPregunta();