document.getElementById("callNow").addEventListener("click", function() {
    fetch('https://randommer.io/api/Phone/Generate?CountryCode=US&Quantity=1', {
        headers: {
            'X-Api-Key': '6a42bfc4a1ba44b6ae2588b8f0da75c7'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(`Phone number: ${data[0]}`);
    })
    .catch(error => console.error('Error:', error));
});



var slider = document.querySelector('.slider');
var slides = document.querySelectorAll('.slide');

slider.style.position = 'relative';
slider.style.width = '100%';
slider.style.height = '990px';
slider.style.overflow = 'hidden';
slider.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.5)';
slider.style.top = '0';
slider.style.left = '0';


for (var i = 0; i < slides.length; i++) {
    slides[i].style.position = 'absolute';
    slides[i].style.width = '100%';
    slides[i].style.height = '100%';
    slides[i].style.left = '0';
    slides[i].style.top = '0';
    slides[i].style.animation = 'slide-animation 12s infinite';
    slides[i].style.opacity = '0';

    
    var img = slides[i].querySelector('img');
    img.style.width = '100%';

    
    if (i === 0) {
        slides[i].style.animationDelay = '0s';
    } else if (i === 1) {
        slides[i].style.animationDelay = '4s';
    } else if (i === 2) {
        slides[i].style.animationDelay = '8s';
    }
}


var style = document.createElement('style');
style.innerHTML = `
  @keyframes slide-animation {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    8% {
        opacity: 1;
        transform: translateX(0%);
    }
    33% {
        opacity: 1;
        transform: translateX(0%);
    }
    41% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 0;
        transform: translateX(-100%);
    }
  }
`;
document.head.appendChild(style);


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



