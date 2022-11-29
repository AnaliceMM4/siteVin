const input = document.querySelectorAll('.input');

function focusF() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurF() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}


input.forEach(input => {
    input.addEventListener('focus', focusF);
    input.addEventListener('blur', blurF);

})