document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var modal = document.getElementById('successModal');
    var closeButton = document.querySelector('.close-button');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        modal.style.display = 'flex'; // Show the modal
        
        // Submit the form after showing the modal
        setTimeout(function() {
            form.submit();
        }, 1000); // Adjust the timeout as needed
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal on click
    });

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
