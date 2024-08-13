let max_speed = 0;
let min_speed = 100;
let num_of_particles = 200;

let isCollision = false;

function evolutionSetup(selectedLight, selectedHeavy) {
    // подготовка тяжелого 
    let positionHeavy = createVector(windowWidth / 4, windowHeight / 2);
    let elementHeavy = {
        name: selectedHeavy.nam,
        position: positionHeavy,
        color: selectedHeavy.color,
        diameter: selectedHeavy.diam,
        p: selectedHeavy.p
    }

    // подготовка легких
    let elementLight = new Array(num_of_particles);
    for (let k = 0; k < num_of_particles; k++) {
        let positionLight = createVector(windowWidth, windowHeight / 2 + random(-150, 150));
        let velocityLight = -random(4, 22);
        if (abs(velocityLight) > abs(max_speed)) {
            max_speed = velocityLight
        }
        if (abs(velocityLight) < abs(min_speed)) {
            min_speed = velocityLight;
        }
        elementLight[k] = {
            name: selectedLight.nam,
            position: positionLight,
            velocity: velocityLight,
            color: selectedLight.color,
            diameter: selectedLight.diam * 0.5
        };
    }

    return [elementHeavy, elementLight];
}

// основная анимация 
let numberOfNeutrons = 0;
let arrNeutrons = [];
function evolution(arrHeavy, arrLight) {
    for (let k = 0; k < num_of_particles; k++) {
        fill(color(arrLight[k].color));
        circle(arrLight[k].position.x, arrLight[k].position.y, arrLight[k].diameter);
        arrLight[k].position.x += arrLight[k].velocity; // сдвиг легких
        // проверка столкновения
        if (
            (arrLight[k].position.x < arrHeavy.position.x) && (isCollision === false)
        ) {
            elementsSuperHeavy.forEach((superHeavy) => {
                if (superHeavy.lightName === arrLight[k].name && superHeavy.heavyName === arrHeavy.name) {
                    isCollision = true;
                    arrHeavy.diameter = superHeavy.diam;
                    arrHeavy.p = superHeavy.p;
                    arrHeavy.color = superHeavy.color;
                    arrHeavy.name = superHeavy.nam;
                    numberOfNeutrons = superHeavy.nNumber
                }
            })
            for (let j = 0; j < numberOfNeutrons; j++) {
                arrNeutrons[j] = {
                    position: createVector(arrHeavy.position.x, arrHeavy.position.y),
                    velocity: createVector(random(-6, 6), random(-6, 6)),
                };
            }
        }

        if (arrLight[k].velocity === min_speed && arrLight[k].position.x < arrHeavy.position.x && flag === false) {
            flag = !flag
        }
    }

    if (isCollision) {
        for (let j = 0; j < arrNeutrons.length; j++) {
            fill("red");
            circle(arrNeutrons[j].position.x, arrNeutrons[j].position.y, 20);
            arrNeutrons[j].position.add(arrNeutrons[j].velocity);
        }
    }

    fill(color(arrHeavy.color));
    circle(arrHeavy.position.x, arrHeavy.position.y, arrHeavy.diameter);

    fill("black");
    textSize(50);
    textFont("Comic Sans MS");
    textAlign("center");
    text(arrHeavy.p + "\n" + arrHeavy.name + "\n" + arrHeavy.diameter, 
        arrHeavy.position.x, arrHeavy.position.y - 40)

}