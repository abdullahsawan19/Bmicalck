document.getElementById("button").addEventListener("click", function () {
  let weight = document.getElementById("weight").value;
  let hight = document.getElementById("hight").value;
  let result = weight / hight ** 2;
  if (result < 18) {
    document.getElementById("reultCalc").innerHTML = `${result}`;
    document.getElementById("reultBmi").innerHTML = "UNDER WEIGTH";
  } else if (24.9 > result > 18) {
    document.getElementById("reultCalc").innerHTML = `${result}`;
    document.getElementById("reultBmi").innerHTML = "NORMAL";
  } else if (29.9 > result > 25) {
    document.getElementById("reultCalc").innerHTML = `${result}`;
    document.getElementById("reultBmi").innerHTML = "OVER WEIGHT";
  } else if (34.9 > result > 30) {
    document.getElementById("reultCalc").innerHTML = `${result}`;
    document.getElementById("reultBmi").innerHTML = "OBESE";
  } else if (39.9 > result > 35) {
    document.getElementById("reultCalc").innerHTML = `${result}`;
    document.getElementById("reultBmi").innerHTML = "MORE OBESE";
  } else if (result > 40) {
    document.getElementById("reultCalc").innerHTML = `${result}`;
    document.getElementById("reultBmi").innerHTML = "SEVERELY OBESE";
  }
});
