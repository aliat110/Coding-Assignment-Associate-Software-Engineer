function validateForm() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var date = document.getElementById("date").value;
  var country = document.getElementById("country");
  var selectedCountry = country.options[country.selectedIndex].text;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (
    firstName != "" &&
    lastName != "" &&
    date != "" &&
    profession != "" &&
    email != "" &&
    phone != ""
  ) {
    alert(
      "You entered the following details\n" +
      "First Name:- " +
      firstName +
      "\n" +
      "Last Name:- " +
      lastName +
      "\n" +
      "Date of Bith:- " +
      date +
      "\n" +
      "Country :- " +
      selectedCountry +
      "\n" +
      "Gender :-" +
      gender +
      "\n" +
      "Profession :- " +
      profession +
      "\n" +
      "Email :- " +
      email +
      "\n" +
      "Phone :- " +
      phone
    );
  }
  var clearInputs = document.querySelectorAll("input");
  clearInputs.forEach((singleInput) => (singleInput.value = ""));
}

document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#country");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((country) => {
        output += `
        <option value="${country.name.common}">${country.name.common}  </option>`;
      });
      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});
