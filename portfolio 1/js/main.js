window.onload=function(){
  $('.slider').slick({
  autoplay:true,
  autoplaySpeed:1500,
  arrows:false,
  dots:true,
  infinite:true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
  centerMode:true,
  slidesToShow:5,
  slidesToScroll:1
  });
  $('.slider2').slick({
  autoplay:true,
  autoplaySpeed:1500,
  arrows:false,
  dots:false,
  infinite:true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
  centerMode:true,
  slidesToShow:5,
  slidesToScroll:1
  });
};