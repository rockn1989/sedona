
(function() {
    var likeBox = document.querySelectorAll('.user-post__like-svg');


    function likeIt() {
        var like;
        var likeCountBox = this.parentNode.querySelector('.user-post__like-counter');
        likeCountBox.innerText = parseInt(likeCountBox.innerText) + 1;
        this.removeEventListener('click',likeIt);
    }

    for(var i = 0; i < likeBox.length; i++) {
        likeBox[i].addEventListener('click', likeIt, false);
    }

})();