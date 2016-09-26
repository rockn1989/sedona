'use strict';

(function() {
    var interviewForm = document.querySelector('.interview');

    interviewForm.elements.username.value = localStorage.getItem('username') || '';
    interviewForm.elements.email.value = localStorage.getItem('email') || '';
   
    interviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var value = new FormData(this);
        if(window.localStorage) {
            value.forEach(function(value, el) {
                if(el === 'username' || el === 'email') {
                    localStorage.setItem(el, value);
                }
            })
        }
    });
})();