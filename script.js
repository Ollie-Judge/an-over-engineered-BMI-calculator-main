const chooseUnits = document.getElementById("chooseUnits");

const nameInput = document.getElementById("name");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

let heightDiv = document.getElementById("heightDiv");

let submitButton = document.getElementById("submitButton");

let outputDiv = document.getElementById("outputDiv");

console.log("test1 works");

chooseUnitsChange = () => {
  if (chooseUnits.value === "Metric") {
    console.log(chooseUnits.value);

    heightInput.placeholder = "Height in m";
    document.getElementById("weight").placeholder = "Weight in kg";

    submitButton.addEventListener("click", startMetric);
  } else if (chooseUnits.value === "Imperial") {
    console.log(chooseUnits.value);

    heightInput.placeholder = "ft";
    weightInput.placeholder = "Weight in lbs";

    let inchesInput = document.createElement("input");
    inchesInput.setAttribute("type", "number");
    inchesInput.setAttribute("id", "inches");
    inchesInput.setAttribute("placeholder", "inches");
    inchesInput.setAttribute("maxlength", "4");
    heightDiv.appendChild(inchesInput);

    submitButton.addEventListener("click", startImperial);
  }
};

const startMetric = () => {
  console.log("started Metric");

  class PersonMetric {
    constructor(name, height, weight) {
      this.name = name;
      this.height = height;
      this.weight = weight;
    }
    calcBmi = () => {
      console.log(Math.floor(this.weight / (this.height * this.height)));
      return Math.floor(this.weight / (this.height * this.height));
    };
  }

  let textLocation = document.createElement("p");
  const a = new PersonMetric(
    nameInput.value,
    heightInput.value,
    weightInput.value
  );
  textLocation.innerText = `${a.name}, your height is: ${
    Math.floor(a.height * 100) / 100
  }m, your weight is: ${
    Math.floor(a.weight * 100) / 100
  }kg, based off of the data you've given, your BMi is: ${a.calcBmi()}`;
  outputDiv.appendChild(textLocation);
};

const startImperial = () => {
  console.log("started Imperial");
  const heightInputInches = document.getElementById("inches");

  class PersonImperial {
    constructor(name, heightFt, heightInches, weight) {
      this.name = name;
      this.heightFt = heightFt;
      this.heightInches = heightInches;
      this.weight = weight;
    }
    calcBmi = () => {
      let ftConverted = this.heightFt * 12;
      console.log(ftConverted);
      let addInchesAndFt = parseInt(ftConverted) + parseInt(this.heightInches);
      console.log(addInchesAndFt);
      return Math.floor(
        (this.weight / (addInchesAndFt * addInchesAndFt)) * 703
      );
    };
  }

  let textLocation = document.createElement("p");
  const a = new PersonImperial(
    nameInput.value,
    heightInput.value,
    heightInputInches.value,
    weightInput.value
  );
  textLocation.innerText = `${a.name}, your height is: ${Math.floor(
    a.heightFt
  )} ft ${heightInputInches.value} inches, your weight is: ${
    Math.floor(a.weight * 100) / 100
  }lbs, based off of the data you've given, your BMi is: ${a.calcBmi()}`;
  outputDiv.appendChild(textLocation);
};
