let slideIndex = 0
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("slideshow__slides")

  var dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  slides[slideIndex - 1].style.display = "block"

  dots[slideIndex - 1].className += " active"
}

const navClose = () => {
  document.getElementById("navi-toggle").checked = false
}

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy")
  var lazyloadThrottleTimeout

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout)
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src
          img.classList.remove("lazy")
        }
      })
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload)
        window.removeEventListener("resize", lazyload)
        window.removeEventListener("orientationChange", lazyload)
      }
    }, 20)
  }

  document.addEventListener("scroll", lazyload)
  window.addEventListener("resize", lazyload)
  window.addEventListener("orientationChange", lazyload)
})
