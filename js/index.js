// globala 
const hamburger_menu = document.querySelector(".hamburger_menu");
const hamburger_menu_item = document.querySelectorAll(".hamburger_menu_item");
const hamburger_button_icon = document.querySelector(".hamburger_button_icon");
const hamburger_menu_icon_close = document.querySelector(".hamburger_menu_icon_close");
const hamburger_menu_icon_open = document.querySelector(".hamburger_menu_icon_open");

function toggleHamburgerMenu(){
    console.log(hamburger_menu.classList);
    if (hamburger_menu.classList.contains("showMenu")){
        hamburger_menu.classList.remove("showMenu");
        hamburger_menu_icon_close.style.display = "none";
        hamburger_menu_icon_open.style.display = "block";
    } else {
        hamburger_menu.classList.add("showMenu");
        hamburger_menu_icon_close.style.display = "block";
        hamburger_menu_icon_open.style.display = "none";
    }
};

hamburger_button_icon.addEventListener("click", toggleHamburgerMenu);

hamburger_menu_item.forEach(
    function(hamburger_menu_item){
        hamburger_menu_item.addEventListener("click", toggleHamburgerMenu);
    }
)

// funktion för slideshow
const text = document.getElementById('textSlider');
let position = 0;
let animationFrame;
let isAnimating = false;

function slideText() {
    position -= 2; 
    text.style.left = position + 'px';
    if (position + text.offsetWidth < 0) {
      position = text.parentElement.offsetWidth; 
    }

      animationFrame = requestAnimationFrame(slideText);
  }
  
  text.addEventListener('mouseenter', () => {
    if (!isAnimating) {
      isAnimating = true; 
      position = parseInt(getComputedStyle(text).left, 10) || 0;
      animationFrame = requestAnimationFrame(slideText);
    }
  });
  
  // Stoppa sliden när man hoovrar över 
  
//   text.addEventListener('mouseleave', () => {
//     cancelAnimationFrame(animationFrame);
//     isAnimating = false; // Mark animation as stopped
//   });