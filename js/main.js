function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
jQuery(document).ready(function () {

  //interactive 3dtext 
  $('.3d').mousemove(function (e) {
    var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
    var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
    $('.3d').css('text-shadow', +rYP / -10 + 'px ' + rXP / 80 + 'px rgba(0,255,255,.8), ' + rYP / 18 + 'px ' + rXP / 60 + 'px rgba(255,0,255,1), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(255,0,255,.7)');
  });

  //hamburger click///
  let hamburger = $('.hamburger')
  hamburger.click(function () {
    $('nav').toggleClass("open-nav");
    hamburger.toggleClass("change")
    $('.hamburger .bar1').toggleClass("change1");
    $('.hamburger .bar2').toggleClass("change2");
    $('.hamburger .bar3').toggleClass("change3");
  })

  //hover I'm Bao Mai
  let letters = document.querySelectorAll('.animation span')
  letters.forEach(function (element, number) {
    element.addEventListener("mouseover", function (event) {
      // element.classList.add("jumping");
      // console.log(element)
      // sleep(1000);
      // element.classList.remove("remove")
    })
  })
})




