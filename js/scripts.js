/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 



window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Quote

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    ' "Art washes away from the soul the dust of everyday life." - Pablo Picasso',
    ' "Travel isn\'t always pretty. It isn\'t always comfortable. Sometimes it hurts, it even breaks your heart. But that\'s OK. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind." - Anthony Bourdain',
    ' "I learned that the world has a soul, and that whoever understands that soul can also understand the language of things. " - Paolo Coelho',
];

btn.addEventListener('click', function(){
 var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
 output.innerHTML = randomQuote;
})


// API Weather
let city="Montreal";
const icon = document.getElementById("icon");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?" +
  new URLSearchParams ({
    q: city,
    units: "metric",
    appid: "ee72342542ef64ef20b975230e092d72",
  })
 
)
  .then((data) => data.json())
  .then ((weather) => {
    console.log(weather);
    // http://openweathermap.org/img/wn/01n@2x.png
    icon.setAttribute("src", "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png");
    heading.textContent=
    "Live weather in " + 
    city +
    " is: " +
    Math.floor(weather.main.temp) + 
    " degrees";
  });

  const heading = document.getElementsByTagName("h4")[0];
  heading.textContent = "Montreal, Quebec";
  heading.textContent = "Live weather in Montreal";