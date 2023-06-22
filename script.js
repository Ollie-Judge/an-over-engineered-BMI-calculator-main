const chooseUnits = document.getElementById("chooseUnits").value;

document.getElementById("chooseUnits").onchange = function () {
  console.log(this.value);
  if (this.value === "Metric") {
    document.getElementById("height").placeholder = "Height in m";
    document.getElementById("weight").placeholder = "Weight in kg";
  } else if (this.value === "Imperial") {
    document.getElementById("height").placeholder = "Height in ft";
    document.getElementById("weight").placeholder = "Weight in lbs";
  }
};

const start = () => {
  const nameInput = document.getElementById("name").value;
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;

  let outputDiv = document.getElementById("outputDiv");

  document.getElementById("resultExplanation").remove();

  class Person {
    constructor(name, height, weight) {
      this.name = name;
      this.height = height;
      this.weight = weight;
    }
    calcBmi = () => {
      return Math.floor(this.weight / (this.height * this.height));
    };
  }

  let textLocation = document.createElement("p");

  if (chooseUnits === "Metric") {
    const a = new Person(nameInput, heightInput, weightInput);

    textLocation.innerText = `${a.name}, your height is: ${
      a.height
    }m, your weight is: ${
      a.weight
    }kg, based off of the data you've given, your BMi is: ${a.calcBmi()}`;
    outputDiv.appendChild(textLocation);
  } else if (chooseUnits === "Impreial") {
    let convertedHeight = heightInput * 0.3048;
    let convertedWeight = weightInput * 0.45359237;

    const a = new Person(nameInput, convertedHeight, convertedWeight);

    textLocation.innerText = `${a.name}, your height is: ${
      a.height
    }, your weight is: ${
      a.weight
    }, based off of the data you've given, your BMi is: ${a.calcBmi()}`;
    outputDiv.appendChild(textLocation);
  }
};

/*const mark = new Person("Mark", "1.69", "78");
mark.calcBmi();
console.log(
  `${mark.name} is ${mark.height}m tall, and weighs ${mark.weight}kg`
);
const john = new Person("John", "1.95", "92");
john.calcBmi();
console.log(
  `${john.name} is ${john.height}m tall, and weighs ${john.weight}kg`
);

const mark2 = new Person("Mark2", "1.88", "95");
mark2.calcBmi();
console.log(
  `${mark2.name} is ${mark2.height}m tall, and weighs ${mark2.weight}kg`
);
const john2 = new Person("John2", "1.76", "85");
john2.calcBmi();
console.log(
  `${john2.name} is ${john2.height}m tall, and weighs ${john2.weight}kg`
);
*/
