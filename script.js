document.getElementById("chooseUnits").onchange = function () {
  if (this.value === "Metric") {
    document.getElementById("height").placeholder = "Height in m";
    document.getElementById("weight").placeholder = "Weight in kg";
  } else if (this.value === "Imperial") {
    document.getElementById("height").placeholder = "ft";
    let heightDiv = document.getElementById("heightDiv");
    let inchesInput = document.createElement("input");
    inchesInput.setAttribute("type", "number");
    inchesInput.setAttribute("id", "inches");
    inchesInput.setAttribute("placeholder", "inches");
    inchesInput.setAttribute("maxlength", "4");
    heightDiv.appendChild(inchesInput);
    document.getElementById("weight").placeholder = "Weight in lbs";
  }
};

document.getElementById("userInputDiv");
let textLocation = document.createElement("input");

const start = () => {
  const nameInput = document.getElementById("name").value;
  let heightInput = document.getElementById("height").value;
  const inchesInput = document.getElementById("inches").value;
  const weightInput = document.getElementById("weight").value;

  const chooseUnits = document.getElementById("chooseUnits").value;

  let outputDiv = document.getElementById("outputDiv");

  document.getElementById("resultExplanation").remove();

  if (chooseUnits === "Imperial") {
    let convertedFeetToInches = heightInput * 12;
    heightInput = parseInt(inchesInput) + parseInt(convertedFeetToInches);
    console.log(heightInput);
  }

  class Person {
    constructor(name, height, weight) {
      this.name = name;
      this.height = height;
      this.weight = weight;
    }
    calcBmi = () => {
      if (chooseUnits === "Metric") {
        return Math.floor(this.weight / (this.height * this.height));
      } else {
        return Math.floor((this.weight / (this.height * this.height)) * 703);
      }
    };
  }

  let textLocation = document.createElement("p");

  if (chooseUnits === "Metric") {
    const a = new Person(nameInput, heightInput, weightInput);
    textLocation.innerText = `${a.name}, your height is: ${
      Math.floor(a.height * 100) / 100
    }m, your weight is: ${
      Math.floor(a.weight * 100) / 100
    }kg, based off of the data you've given, your BMi is: ${a.calcBmi()}`;
    outputDiv.appendChild(textLocation);
  } else if (chooseUnits === "Imperial") {
    const a = new Person(nameInput, heightInput, weightInput);
    textLocation.innerText = `${a.name}, your height is: ${Math.floor(
      a.height / 12
    )} ft ${inchesInput} inches, your weight is: ${
      Math.floor(a.weight * 100) / 100
    }lbs, based off of the data you've given, your BMi is: ${a.calcBmi()}`;
    outputDiv.appendChild(textLocation);
  } else {
    textLocation.innerText = "Catastrophic Error, run for your life";
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
