import Glide from '@glidejs/glide'

document.addEventListener('DOMContentLoaded', () => {
  const burgerElement = document.getElementById('burger'); 
  const menuElement = document.getElementById('menu');
  
  burgerElement.addEventListener('click', function () {
    const isActive = menuElement.classList.contains('_visible');
    
    if (isActive) {
      this.classList.remove('_active');
      menuElement.classList.add('_hide');
      setTimeout(() => {
        menuElement.classList.remove('_hide');
        menuElement.classList.remove('_visible');
      }, 400);
    } else {
      this.classList.add('_active');
      menuElement.classList.add('_visible');
    }
  });

  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: false,
    hoverpause: true,
  }).mount();

  new Glide(".news-glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    autoplay: 4000,
    breakpoints: {
      1280: {
        perView: 2
      },
      1024: {
        perView: 1
      }
    }
  }).mount();
 
});


  
  







// $(document).on('ready', function(){
//   burger(),
//   glide(),
 

// });