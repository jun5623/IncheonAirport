$(function(){
  $(".button").click(function(){
    $(this).next(".language").slideToggle();
  });

  $(".nav_button").click(function() {
      $(".nav_bar").slideToggle();
  });


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop:true,
  allowTouchMove:false,
  simulateTouch:false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


  $(".chois_button").click(function(){
    $(".chois_button").removeClass("click");
    $(this).addClass("click");
  })
  $(".flights_depart").show()
  $(".flights_arrive").hide()
  $(".start").click(function(){
    $(".flights").removeClass("chois");
    $(this).addClass("chois");
    $(".flights_depart").show()
    $(".flights_arrive").hide()
  })
  $(".end").click(function(){
    $(".flights").removeClass("chois");
    $(this).addClass("chois");
    $(".flights_depart").hide()
    $(".flights_arrive").show()

  })


  $(".passenger").click(function(){
    $(".passenger").removeClass("bombo");
    $(this).addClass("bombo");
  })

  $(".perking").click(function(){
    $(".perking").removeClass("bongbu");
    $(this).addClass("bongbu");
  })



})



const API_KEY = '114f13d3bba659a4157012a4ae0d46f7';

function getWeather() {
    const lat = 37.4563;  
    const lon = 126.7052; 

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const weatherIcon = document.querySelector('.weather-icon');
            const tempElement = document.querySelector('.temp');
            const dateElement = document.querySelector('.date');
            const dateElement2 = document.querySelector('.date2');
            
            const iconName = data.weather[0].icon;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconName}.png" alt="weather icon">`;

            tempElement.innerHTML = `${data.main.temp}°C`;

            const date = new Date();
            const formattedDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
            dateElement.innerHTML = formattedDate;
            dateElement2.innerHTML = formattedDate;
        })
        .catch(error => console.log('Error:', error));
}

getWeather();

function updateTime() {
  const timeElement = document.querySelector('.time');
  const timeElement2 = document.querySelector('.time2');
  
  setInterval(() => {
      const date = new Date();
      
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      
      timeElement.innerHTML = timeString;
      timeElement2.innerHTML = timeString;
  }, 1000);
}

updateTime();