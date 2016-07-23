(function() {

    var btnSubmit = document.querySelector('.button.button--send');
    var interviewForm = document.querySelector('.interview');

    function validation(form) {
        for(var i = 0; i < form.elements.length; i++) {
            if(form.elements[i].tagName == 'FIELDSET') continue;

            form.elements[i].classList.remove('error');

            if(form.elements[i].className == 'form-input__text') {
                if(!form.elements[i].value.match(/^[A-Za-zА-Яа-я]{3,35}/ig)) {
                    form.elements[i].focus();
                    sendError(form.elements[i]);
                    return false;
                }
            }

            if(form.elements[i].id == 'tel') {
                if(!form.elements[i].value.match(/^[0-9]{11,}/ig)) {
                    form.elements[i].focus();
                    sendError(form.elements[i],'Ошибка, перепроверьте номер');
                    return false;
                }
            }

            if(form.elements[i].id == 'email') {
                if(!form.elements[i].value.match(/^[A-Za-z0-9_]+@[a-z]{2,5}\.[a-z]{2,3}/ig)) {
                    form.elements[i].focus();
                    sendError(form.elements[i]);
                    return false;
                }
            }

            if(form.elements[i].className == 'form-textarea') {
                if(!form.elements[i].value.match(/^[A-Za-zА-Яа-я]{1,}/ig)) {
                    form.elements[i].focus();
                    sendError(form.elements[i]);
                    return false;
                }
            }


        }
        return 1;
    }

    function elBlur() {
        this.classList.remove('error');
        this.removeEventListener('blur', elBlur);
    }

    function sendError(el, text) {

        el.classList.add('error');
        el.addEventListener('blur', elBlur);

        if(text) {
            var msgError = document.createElement('span');
            msgError.classList.add('error__text');
            msgError.innerText = text;
            el.parentNode.insertAdjacentElement('beforeEnd', msgError);
            setTimeout(function(){ el.parentNode.removeChild(msgError)}, 3000);
        }

    }

    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        var attantion = validation(interviewForm);
        if(attantion == 1) {
            interviewForm.submit();
        }
    });





})();
