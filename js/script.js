document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    const slideInterval = 5000;

    function changeSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('opacity-100', 'bg-yellow-500'));

      slides[index].classList.add('active');
      dots[index].classList.add('opacity-100', 'bg-yellow-500');
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        changeSlide(currentSlide);
      });
    });

    function autoSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      changeSlide(currentSlide);
    }

    changeSlide(currentSlide);
    setInterval(autoSlide, slideInterval);
  });

   
    // Simple Slider
    const track = document.getElementById('slider-track');
    let offset = 0;
    const slideCount = 4;

    setInterval(() => {
      offset -= 100 / slideCount;
      if (Math.abs(offset) >= 100) offset = 0;
      track.style.transform = `translateX(${offset}%)`;
    }, 3000);


    // Dropdown
  // Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('products-dropdown');
    const menu = document.getElementById('dropdown-menu');
    if (!dropdown.contains(event.target)) {
      menu.classList.remove('opacity-100', 'visible');
    }
  });

  // Close the dropdown when an option is clicked
  const dropdownLinks = document.querySelectorAll('#dropdown-menu a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('dropdown-menu').classList.remove('opacity-100', 'visible');
    });
  });

  // Open the dropdown when hovered over
  const productsDropdown = document.getElementById('products-dropdown');
  productsDropdown.addEventListener('mouseenter', function() {
    document.getElementById('dropdown-menu').classList.add('opacity-100', 'visible');
  });
  productsDropdown.addEventListener('mouseleave', function() {
    document.getElementById('dropdown-menu').classList.remove('opacity-100', 'visible');
  }); 