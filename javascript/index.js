function bottomreveal() {
  var reveals = document.querySelectorAll(".news2_part, #odd_pic, .news1_part");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      reveals[i].classList.add("slideFromBottom");
    } else {
      reveals[i].classList.remove("active");
      reveals[i].classList.add("slideFromBottom");
    }
  }
}

window.addEventListener("scroll", bottomreveal);

function leftReveal() {
  var reveals = document.querySelectorAll(".news1_part");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      reveals[i].classList.add("slideFromLeft");
    } else {
      reveals[i].classList.remove("active");
      reveals[i].classList.add("slideFromLeft");
    }
  }
}

window.addEventListener("scroll", leftReveal);

function rightReveal() {
  var reveals = document.querySelectorAll(" .pizza_pic");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      reveals[i].classList.add("slideFromRight");
    } else {
      reveals[i].classList.remove("active");
      reveals[i].classList.add("slideFromRight");
    }
  }
}

window.addEventListener("scroll", rightReveal);

// window.addEventListener('scroll', function() {
//     const element = document.querySelector('.news2_part');
//     const position = element.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if (position < windowHeight) {
//       element.classList.add('active');
//     }
//   });
