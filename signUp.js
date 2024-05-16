const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const pass_error = document.getElementById("pass_error");
const success_Message = document.getElementById('success_Message');

form.addEventListener('submit', (e) => {
  var email_check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = true;

  if(name.value === `` || name.value == null) {
    e.preventDefault();
    name_error.innerHTML = "Name Is Required";
    isValid = false;
  } else {
    name_error.innerHTML = "";
  }

  if(!email.value.match(email_check)){
    e.preventDefault();
    email_error.innerHTML = "Valid Email Is Required";
    isValid = false;
  } else {
    email_error.innerHTML = "";
  }

  if(password.value.length <= 8) {
    e.preventDefault();
    pass_error.innerHTML = "Password must be more than 8 characters";
    isValid = false;
  } else {
    pass_error.innerHTML = "";
  }

  if(password.value.length >= 25) {
    e.preventDefault();
    pass_error.innerHTML = "Password cannot be less than 20 characters";
    isValid = false;
  }

  if(password.value === "password") {
    e.preventDefault();
    pass_error.innerHTML = "Password cannot be `password`";
    isValid = false;
  }

  if(isValid) {
    var user = {
      name: name.value,
      email: email.value,
      password: password.value
    };

    var userJson = JSON.stringify(user);

    localStorage.setItem(email.value, userJson);

    success_Message.innerHTML = 'You registered successfully! <br> Now click here to head over to Log In Page';
  }

  e.preventDefault(); 
  e.target.reset();
})



      function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}


document.getElementById('searchInput').addEventListener('input', function() {
  var searchQuery = this.value;


  fetch('https://restcountries.com/v3.1/all') 
      .then(response => response.json())
      .then(data => {
          var dataList = document.getElementById('countries-datalist');
          dataList.innerHTML = ""; 


          var filteredData = data.filter(item => item.name.common.toLowerCase().includes(searchQuery.toLowerCase()));

          filteredData.forEach(country => {
              var option = document.createElement('option');
              option.value = country.name.common;
              dataList.appendChild(option);
          });
      });
});