

function calcularMedia() {
    // Obtener los valores ingresados por el usuario
    let valor1 = parseFloat(document.getElementById("input1").value);
    let valor2 = parseFloat(document.getElementById("input2").value);
    let valor3 = parseFloat(document.getElementById("input3").value);
    let valor4 = parseFloat(document.getElementById("input4").value);
  
    // Actualizar los valores de los score en el array
    data[0].score = valor1;
    data[1].score = valor2;
    data[2].score = valor3;
    data[3].score = valor4;
  
    // Sumar los valores de los score del array
    let suma = 0;
    for (var i = 0; i < data.length; i++) {
      suma += data[i].score;
    }
  
    // Calcular la media dividiendo la suma por el length del array
    let media = suma / data.length;

    // Redondear el resultado de la media obtenida a numero entero
    media = Math.floor(media);
  
    // Mostrar el resultado en el div izquierdoo
    document.getElementById("resultado").textContent = media;
  }

let data = [
  {
    "category": "Reaction",
    "score": 0,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 0,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 0,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 0,
    "icon": "./assets/images/icon-visual.svg"
  }
];