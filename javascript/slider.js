let index = 0;
activeNav();

function activeNav() {
  let i;
  let slides = document.getElementsByClassName("slide");
  console.log(slides);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";

  setTimeout(activeNav, 6000);
}
