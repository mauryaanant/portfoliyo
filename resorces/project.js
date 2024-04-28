//Google sheet connect code 
var scriptURL = "https://script.google.com/macros/s/AKfycbzau_J0uak-7wfVrcL2CbjPRrQYnAWkTKjiEfyGjUhHJDpjaBzjwW4ipYugJesRksD4/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});



$("#top-button").click(function(){
    $("html, body").animate({scrollTop: 0}, 100);
    
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
        $('#top-button').hide();
    } else {
        $('#top-button').show();
    }
  });
  
  
  AOS.init();