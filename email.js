document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var modal = document.getElementById('successModal');
    var closeButton = document.querySelector('.close-button');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        modal.style.display = 'flex'; // Show the modal

        var formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: {
                'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(formData).toString()
        }).then(response => {
            if (response.ok) {
                console.log('Form successfully submitted to Netlify');
            } else {
                console.log('Network response was not ok.');
            }
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
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
