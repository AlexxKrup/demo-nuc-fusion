let selectedHeavy;  // для выбранного тяжелого элемента 
let selectedLight;  // для выбранного легкого элемента 

// кнопоки для тяжелых элементов
function ListElementHeavy(posX, posY, sz, selectedElem) {
  let button = createButton('');
  button.mouseClicked(function () {                         // выполняется, если кликнуть по кнопке
    getElement(selectedElem, true);                       // "запоминает" параметры элемента
    button.style("background-color", color(180, 10, 10)); // окрашивает
    flagSelectedHeavy = true; 
  });
  button.size(sz, sz);
  button.position(posX, posY);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "12px");
  button.style("text-align", "center");
  // пишем характеристики элемента на кнопке (см. elements.js)
  button.html(` 
      <div>${selectedElem.p}</div>
      <div style="font-weight: bold;">${selectedElem.nam}</div>
      <div>${selectedElem.diam}</div>
    `);
}

// кнопки для легких элементов
function ListElementLight(posX, posY, sz, selectedElem) {
  let button = createButton('');
  button.mouseClicked(function () {
    getElement(selectedElem, false);
    button.style("background-color", color(180, 10, 10));
  });
  button.size(sz, sz);
  button.position(posX, posY);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "12px");
  button.style("text-align", "center");
  button.html(`
      <div>${selectedElem.p}</div>
      <div style="font-weight: bold;">${selectedElem.nam}</div>
      <div>${selectedElem.diam}</div>
    `);
}

function getElement(selectedElem, isHeavy) {
  if (isHeavy) {
    selectedHeavy = selectedElem;
    console.log("heavy: ", selectedElem.nam)
  } else {
    selectedLight = selectedElem;
    console.log("light: ", selectedElem.nam)
  }
}

let weReady = false; // флаг запуска анимации
// кнопка запуска анимации
function StartButton(posX, posY, sz) {
  let button = createButton('Пуск');
  button.size(sz, sz);
  button.position(posX, posY);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "20px");
  button.style("text-align", "center");
  button.mouseClicked(function () {
    // проверка, что есть выбранные элементы
    if (selectedLight && selectedHeavy) {
      // подготовка массивов с тяжелым и легкими элементами 
      // см evolution.js
      const evolArrays = evolutionSetup(selectedLight, selectedHeavy);
      myElementHeavy = evolArrays[0];
      myElementLight = evolArrays[1];
      weReady = true;
      console.log("Go!")
    }
    button.style("background-color", color(10, 10, 10));
  });
}


