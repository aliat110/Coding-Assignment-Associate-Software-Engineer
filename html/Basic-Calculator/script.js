let str = "";
let opcount = 0;
function appendToResult(value) {
  str += value;
  str = str.toString().replace(/^0+/, '');
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
  document.getElementById("temp").value = "0";
  opcount=0;
}
