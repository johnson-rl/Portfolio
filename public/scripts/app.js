console.log("not crazy");

$(document).ready(function(){
   $('.parallax').parallax();
   $('.slider').slider();

   $('.next').click(function (event){
     event.preventDefault()
     $('.slider').slider('next');
   });

   $('.prev').click(function (event) {
     event.preventDefault()
     $('.slider').slider('prev');
   })

});
