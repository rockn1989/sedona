
(function() {
    var likeBox = document.querySelectorAll('.user-post__like-svg');

    function likeIt() {
        var likeCountBox = this.nextElementSibling;
        likeCountBox.innerText = parseInt(likeCountBox.innerText) + 1;
        this.removeEventListener('click', likeIt, true);
    }

    for(var i = 0; i < likeBox.length; i++) {
        likeBox[i].addEventListener('click', likeIt, true);
    }

})();