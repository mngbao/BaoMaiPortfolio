const lakehood = document.getElementById("lakehood");
lakehood.addEventListener("mouseover", () => {
  lakehood.style.transform = "translateY(-80%)";
  lakehood.style.transition = "transform 8s ease-in-out 0s";
});
lakehood.addEventListener("mouseout", () => {
  lakehood.style.transform = "initial";
  lakehood.style.transition = "initial";
});

const styled = document.getElementById("styled");
styled.addEventListener("mouseover", () => {
  styled.style.transform = "translateY(-24%)";
  styled.style.transition = "transform 2s ease-in-out 0s";
});
styled.addEventListener("mouseout", () => {
  styled.style.transform = "translateY(0%)";
  styled.style.transition = "transform 2s ease-in-out 0s";
});

const wooder = document.getElementById("wooder");
wooder.addEventListener("mouseover", () => {
  wooder.style.transform = "translateY(-82%)";
  wooder.style.transition = "transform 8s ease-in-out 0s";
});
wooder.addEventListener("mouseout", () => {
  wooder.style.transform = "translateY(0%)";
  wooder.style.transition = "transform 8s ease-in-out 0s";
});

jQuery(document).ready(function () {
  //hamburger click///
  const menu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");
  const pagination = document.querySelector(".pagination");
  const sections = document.querySelectorAll("section");
  const bars = document.querySelectorAll(".bar");
  const spinner = document.querySelector(".hero_text-spinner");

  let isHello = true;

  setInterval(() => {
    if (isHello) {
      spinner.classList.add("hello-animate");
      spinner.classList.remove("xinchao-animate");
    } else {
      spinner.classList.remove("hello-animate");
      spinner.classList.add("xinchao-animate");
    }
    isHello = !isHello;
  }, 4000);

  menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    nav.classList.toggle("open-nav");
    pagination.classList.toggle("hidden");
  });

  //Fadein Scroll
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();

    var fades = $(".myfade");
    for (var i = 0; i < fades.length; i++) {
      var fade = fades[i];

      if ($(fade).position().top < pageBottom) {
        $(fade).addClass("myvisible");
      }
    }
  });

  //work scrollthrough whole page

  //scroll to section
  // Get all sections

  // Update active section on scroll
  window.addEventListener("scroll", () => {
    // Get current scroll position
    const currentScroll = window.pageYOffset;

    // Find section that matches current scroll position
    let activeSection;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        currentScroll >= sectionTop &&
        currentScroll < sectionTop + sectionHeight
      ) {
        activeSection = section;
      }
    });
    console.log(activeSection.id);
    switch (activeSection.id) {
      case "hello":
        pagination.innerHTML = "Hello";
        break;
      case "work":
        pagination.innerHTML = "My Works";
        pagination.style.color = "white";
        bars.forEach((bar) => {
          bar.style.backgroundColor = "white";
        });
        break;
      case "contact":
        pagination.innerHTML = "Contact";
        pagination.style.color = "black";
        bars.forEach((bar) => {
          bar.style.backgroundColor = "black";
        });
        break;
      default:
        pagination.innerHTML = "Hello";
        break;
    }
  });

  // function smoothScrollBy(distance, duration) {
  //   var initialY = window.scrollY,
  //     y = initialY + distance,
  //     baseY = (initialY + y) * 0.5,
  //     difference = initialY - baseY,
  //     startTime = performance.now();

  //   function step() {
  //     var normalizedTime = (performance.now() - startTime) / duration;
  //     if (normalizedTime > 1) normalizedTime = 1;

  //     window.scrollTo(
  //       0,
  //       baseY + difference * Math.cos(normalizedTime * Math.PI)
  //     );
  //     if (normalizedTime < 1) window.requestAnimationFrame(step);
  //   }
  //   window.requestAnimationFrame(step);
  // }

  // const vh = Math.max(
  //   document.documentElement.clientHeight || 0,
  //   window.innerHeight || 0
  // );

  // window.addEventListener("wheel", (e) => {
  //   e.preventDefault();
  //   const delta = e.wheelDelta || -e.deltaY;
  //   const currentSectionIndex = Math.round(window.pageYOffset / vh);
  //   const nextSectionIndex = currentSectionIndex + (delta > 0 ? -1 : 1);
  //   if (sections[nextSectionIndex]) {
  //     const top = sections[nextSectionIndex].offsetTop;
  //     smoothScrollBy(top - window.pageYOffset, 1000);
  //   }
  // });
});
