// Function to remember the scroll position
var scrollPosition = 0;

// Function to disable scrolling
function disableScroll() {
  scrollPosition = window.pageYOffset; // Remember the scroll position
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = -scrollPosition + 'px'; // Set the top to the negative of the scroll position
  document.body.style.width = '100%'; // Prevent width changes
}

// Function to enable scrolling
function enableScroll() {
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('position');
  document.body.style.removeProperty('top');
  document.body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition); // Scroll to the remembered position
}
  // Initialize modal functionality
  function initModal(buttonId, modalId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(buttonId);
    var span = modal.querySelector(".close"); 
  
    // Open the modal and prevent background scrolling
    btn.onclick = function() {
      modal.style.display = "block";
      disableScroll();
    };
  
    // Close the modal and allow background scrolling
    span.onclick = function() {
      modal.style.display = "none";
      enableScroll();
    };
  
    // Close modal if the user clicks outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        enableScroll();
      }
    };
  }
  
  // Call the function for each modal
  initModal("learnMoreStandard", "standardModal");
  initModal("learnMoreProfessional", "professionalModal");
  initModal("learnMoreMaster", "masterModal");
  