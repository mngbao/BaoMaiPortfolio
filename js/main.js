jQuery(document).ready(function () {
  $('.3d').mousemove(function (e) {
    var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
    var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
    $('.3d').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(227,6,19,.8), ' + rYP / 8 + 'px ' + rXP / 60 + 'px rgba(255,237,0,1), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(0,159,227,.7)');
  });

  let hamburger = $('.hamburger')
  hamburger.click(function () {
    $('nav').toggleClass("open-nav");
    $('.hamburger .bar1').toggleClass("change1");
    $('.hamburger .bar2').toggleClass("change2");
    $('.hamburger .bar3').toggleClass("change3");
  })
});
