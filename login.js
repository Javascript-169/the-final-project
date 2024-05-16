const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const email_error = document.getElementById("email_error");
const pass_error = document.getElementById("pass_error");
const success_Message = document.getElementById('success_Message');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  var isValid = true;

  
  var registeredUser = JSON.parse(localStorage.getItem(email.value));
  

  if (!registeredUser) {
    email_error.innerHTML = "Email does not exist";
    isValid = false;
  } else {
    email_error.innerHTML = ""; 
  }


  if (registeredUser && registeredUser.password !== password.value) {
    pass_error.innerHTML = "Incorrect password";
    isValid = false;
  } else {
    pass_error.innerHTML = "";
  }


  if(isValid) {
    success_Message.innerHTML = 'You logged in successfully!';
    localStorage.setItem('loggedInUser', email.value);
  }

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