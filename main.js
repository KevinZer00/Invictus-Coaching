gsap.registerPlugin(ScrollTrigger);

$(window).bind('scroll',function(e){
  parallaxScroll();
});

function parallaxScroll(){
  var scrolled = $(window).scrollTop(); 
  $('.spill').css('top', -scrolled * 1.25 + 'px');
  $('.hero-background').css('top', -scrolled * 0.25 + 'px');
  $('.hero-background2').css('top', -scrolled * 0.01 + 'px');
  // Assuming your .smoke starts at the bottom, we calculate its position by subtracting
  // a portion of the scrolled amount from its initial bottom position
  var initialSmokePosition = $('.hero').height() - $('.smoke').height();
  $('.smoke').css('top', (initialSmokePosition - scrolled * 0.25) + 'px');
  var heroContentSpeed = parseFloat($('.hero-content').data('speed'));
  var heroContentY = scrolled * heroContentSpeed;
  $('.hero-content').css('transform', 'translateY(' + heroContentY + 'px)');
}


// Set up the scrollTrigger defaults for all animations within the '.about' section
ScrollTrigger.defaults({
  trigger: '.about',
  start: 'top center', // Triggers when the top of the '.about' hits the center of the viewport
  toggleActions: 'play none none none',
});


// Animate About Section content with stagger and easing
gsap.from('.about-content > *', { // Select all direct children of '.about-content'
  scrollTrigger: '.about',
  opacity: 0,
  y: 30, // Slightly smaller movement for a subtler effect
  duration: 1.5, // Shorter duration for a quicker animation
  ease: 'power2.out', // An easing function for a smooth effect
  stagger: 0.2 // Stagger the animation of each child by 0.2 seconds
});

// Select all images within the .about-images container
let images = document.querySelectorAll('.about-images img');

// Counter to keep track of loaded images
let loadedCount = 0;

// Iterate over each image and wait for it to load
images.forEach((image) => {
  let img = new Image();
  img.src = image.src;
  img.onload = () => {
    loadedCount++;
    // Check if all images are loaded
    if (loadedCount === images.length) {
      // All images are loaded, start the GSAP animation
      gsap.from('.about-images img', {
        scrollTrigger: {
          trigger: '.about',
          start: "top 100%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        x: 50,
        duration: 3,
        stagger: 0.2 // Optional: Add stagger for sequential animation of images
      });
    }
  };
});

gsap.to('.quote span', {
  scrollTrigger: {
    trigger: '.quote',
    start: 'top center',
    toggleActions: 'play none none none'
  },
  opacity: 1,
  ease: 'power1.inOut',
  duration: 0.2,
  stagger: 0.075 // Adjust timing between each letter
});

gsap.registerPlugin(ScrollTrigger);

// Animate each testimonial item
gsap.utils.toArray('.testimonial-item').forEach(item => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 90%', // Start the animation when the top of the item is 90% from the top of the viewport
      toggleActions: 'play none none none'
    },
    opacity: 0, // Start with the item invisible
    y: 50, // Start 50px below its final position
    duration: 1, // Animation duration
    ease: 'power2.out' // Easing function
  });
});



// Animate each pricing card container
gsap.utils.toArray('.pricing-card-container').forEach((container, index) => {
  // Animate the pricing card with staggered reveal
  gsap.from(container.querySelector('.pricing-card'), {
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: () => 50 * (index % 2 === 0 ? 1 : -1), // Alternate movement direction
    rotation: () => 10 * (index % 2 === 0 ? -1 : 1), // Slight rotation for added effect
    duration: 1.2,
    ease: 'power2.out',
    stagger: 0.1, // Staggered reveal for each card
    clearProps: "transform" // Reset transform property to initial state
  });
});

// Animate the CTA section
gsap.from('.cta-container > *', { // Select all direct children of '.cta-container'
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 80%', // Adjust the start point as needed
    toggleActions: 'play none none none'
  },
  opacity: 0,
  y: 30, // Move up slightly
  duration: 1, // Duration of the animation
  ease: 'power2.out', // Easing function for a smooth effect
  stagger: 0.2 // Stagger the animation of each child element
});


document.querySelector('.navbar-toggler').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navbar-nav').classList.toggle('expanded');

  // Toggle between burger icon and X icon
  if (this.classList.contains('active')) {
    this.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    this.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Get the elements
const navLinks = document.querySelectorAll('.navbar-nav a');
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggler = document.querySelector('.navbar-toggler');

// Function to close the menu after navigating
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close the menu
    navbarNav.classList.remove('expanded');
    // Change the toggler icon back to the hamburger menu
    navbarToggler.innerHTML = '<i class="fas fa-bars"></i>';
    // Remove the 'active' class from the toggler
    navbarToggler.classList.remove('active');
  });
});

// Function to close the menu when scrolling
window.addEventListener('scroll', () => {
  navbarNav.style.opacity = '0'; // Start the fade-out animation
  setTimeout(() => {
    navbarNav.classList.remove('expanded');
    navbarToggler.classList.remove('active');
    navbarToggler.innerHTML = '<i class="fas fa-bars"></i>';
    navbarNav.style.opacity = ''; // Reset the opacity for the next time the menu is opened
  }, 500); // Match the duration with the CSS transition duration
});

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active'); // Toggle the active class
    item.nextElementSibling.style.display = item.nextElementSibling.style.display === 'block' ? 'none' : 'block'; // Toggle the answer
    item.querySelector('.faq-toggle').textContent = item.classList.contains('active') ? '-' : '+'; // Toggle the plus/minus sign
  });
});





















  