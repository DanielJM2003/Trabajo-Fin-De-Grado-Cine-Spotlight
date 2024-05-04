document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.dropdown');
  var dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
 
  window.addEventListener('click', function() {
      if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
      }
  });
});



const swiper = new Swiper('.swiper', {
 
  loop: true,
  autoplay: {
      delay: 2500, 
      disableOnInteraction: false, 
  },

  
  on: {
      init: function () {
          this.el.addEventListener('mouseenter', () => {
              this.autoplay.stop();
          }, false);
          this.el.addEventListener('mouseleave', () => {
              this.autoplay.start();
          }, false);
      }
  },


  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});






function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
        slides[i].style.opacity = 0.3; 
    }
    slides[slideIndex-1].className += " active";
    slides[slideIndex-1].style.opacity = 1; 
}

let posterIndex = 1;
showSlides(posterIndex);

function moveSlide(n) {
    showSlides(posterIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) { posterIndex = 1; }    
    if (n < 1) { posterIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[posterIndex-1].style.display = "block";  
}
tsParticles.load({
    id: "tsparticles",
    options: {
      fpsLimit: 60,
      particles: {
        number: {
          value: 80
        },
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 20,
            sync: true
          }
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: { min: 1, max: 3 }
        },
        links: {
          enable: true,
          distance: 100,
          color: "random",
          opacity: 0.4,
          width: 1,
          triangles: {
            enable: true,
            color: "#ffffff",
            opacity: 0.1
          }
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          outModes: "out"
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          repulse: {
            distance: 200
          },
          push: {
            quantity: 4
          }
        }
      },
      background: {
        color: "#000000"
      }
    }
  });
  let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}


