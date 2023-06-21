const start = () => {
  class Person {
    constructor(name, height, weight) {
      this.name = name;
      this.height = height;
      this.weight = weight;
    }
    calcBmi = () => {
      console.log(
        this.name + "s, BMI is: " + this.weight / (this.height * this.height)
      );
    };
  }

  const chooseUnits = document.getElementById("chooseUnits").value;

  if (chooseUnits === "Impreial") {
    console.log("ayy");
  }
  const nameInput = document.getElementById("name").value;
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;

  console.log(nameInput);
  console.log(heightInput);
  console.log(weightInput);
  console.log(chooseUnits);

  const a = new Person(nameInput, heightInput, weightInput);
  console.log(a);
  a.calcBmi();
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
