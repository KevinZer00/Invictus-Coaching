document.addEventListener('DOMContentLoaded', function () {
    // Select the form and modal elements from the DOM
    var form = document.querySelector('form');
    var modal = document.getElementById('successModal');
    var closeButton = document.querySelector('.close-button');

    // Add an event listener to handle form submissions
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        modal.style.display = 'flex'; // Show the modal
    });

    // Add an event listener to the close button for closing the modal
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal on close button click
    });

    // Add an event listener to close the modal if clicked outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal on outside click
        }
    };
});
