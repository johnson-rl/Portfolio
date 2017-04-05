console.log("not crazy");

$(document).ready(function(){
   $('.parallax').parallax();
   $('.slider').slider();
   $('.modal').modal()

   $('.next').click(function (event){
     event.preventDefault()
     $('.slider').slider('next');
   });

   $('.prev').click(function (event) {
     event.preventDefault()
     $('.slider').slider('prev');
   })

   $('.about-button').click(function (event){
     console.log('clicked')
     event.preventDefault()
     $('.contact').toggleClass('hide', true)
     $('.adventure').toggleClass('hide', true)
     $('.about').toggleClass('hide', false)
   })

   $('.contact-button').click(function (event){
     console.log('clicked')
     event.preventDefault()
     $('.about').toggleClass('hide', true)
     $('.adventure').toggleClass('hide', true)
     $('.contact').toggleClass('hide', false)
   })

   $('.adventure-button').click(function (event){
     console.log('clicked')
     event.preventDefault()
     $('.contact').toggleClass('hide', true)
     $('.about').toggleClass('hide', true)
     $('.adventure').toggleClass('hide', false)
   })

});
