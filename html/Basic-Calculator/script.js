let str = "";
let opcount = 0;
function appendToResult(value) {
  str += value;
  document.getElementById("temp").value = str;
}

function appendOperator(operator) {
  opcount = 1;
  str += operator;
  document.getElementById("temp").value = str;
}

function calculateResult() {
  try {
    if (opcount) {
      document.getElementById("temp").value = eval(str);
      str = "";
      opcount=0;
    }
  } catch (error) {
    document.getElementById("temp").value = "Error";
    str = "";
    opcount=0;
  }
}

function clearResult() {
  str = "";
  document.getElementById("temp").value = "";
  opcount=0;
}
