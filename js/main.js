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

// const form = document.querySelector('.contact-form');

// function sendEmail(e) {
//   e.preventDefault();


//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "maigiabao69@gmail.com",
//     Password: "07973B992224A862D6EE50A04EAC0FA33EA6",
//     To: 'maingocgiabao@gmail.com',
//     From: "abc@test.com",
//     Subject: "This is the subject",
//     Body: "And this is the body"
//   }).then(
//     message => alert(message)
//   );

//   // 678DA0B8FE681A4053EB63092D8000502958
// // }

// // form.addEventListener("submit", sendEmail);


// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "maigiabao69@gmail.com",
//     Password: "07973B992224A862D6EE50A04EAC0FA33EA6",
//     To: 'maingocgiabao@gmail.com',
//     From: "sender@example.com",
//     Subject: "Test email",
//     Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//   }).then(
//     message => alert(message)
//   );
// }