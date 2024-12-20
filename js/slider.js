// Hero Carousel
const sliderl=document.querySelector('#glidel');
if(sliderl){
    new Glide(sliderl,{
        type:'carousel',
        startAt: 0,
        autoplay: 3000,
        gap: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: 'linear',

    }).mount();

}



