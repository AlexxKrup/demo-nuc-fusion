function setup() {
  createCanvas(windowWidth, windowHeight);

  // настройки кнопок в файле buttons.js

  // создаем кнопки тяжелых элементов 
  let szHeavy = 60; // размер
  let xHeavy = 20;  // координата x
  let yHeavy = 40;  // координата y
  for (let k = 0; k < elementsHeavy.length; k++) {
    ListElementHeavy(
      xHeavy + k * szHeavy, yHeavy, szHeavy, elementsHeavy[k])
  }

  // создаем кнопки легких элементов 
  let szLight = 60;
  let xLight = windowWidth - elementsLight.length * szLight - 10;
  let yLight = windowHeight - szLight - 10;
  for (k = 0; k < elementsLight.length; k++) {
    ListElementLight(
      xLight + k * szLight, yLight, szLight, elementsLight[k])
  }

  // создаем кнопку "Пуск"
  let szButton = 100;
  let xButton = 10;
  let yButton = windowHeight - szButton - 10;
  StartButton(xButton, yButton, szButton);
}


let flag = false;
let flagSelectedHeavy = false; 

function draw() {
  background("black");
  noStroke();
  
  // отображение выбранного тяжелого элемента 
  if (!weReady && flagSelectedHeavy) { 
    // console.log("ok")
    fill(color(selectedHeavy.color));
    circle(windowWidth / 4,  windowHeight / 2, selectedHeavy.diam);

    fill("black");
    textSize(50);
    textFont("Comic Sans MS");
    textAlign("center");
    text(selectedHeavy.p + "\n" + selectedHeavy.nam + "\n" + selectedHeavy.diam, 
      windowWidth / 4, windowHeight / 2 - 40)
  }

  // основная анимация 
  if (weReady) {   // если нажали "Пуск"
    evolution(myElementHeavy, myElementLight);
    if (flag) {  
      fill("white");
      textFont("Arial");
      textAlign("center");
      text("текст", windowWidth / 2, windowHeight / 2); 
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
