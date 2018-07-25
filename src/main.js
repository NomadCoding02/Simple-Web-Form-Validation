import './styles.scss';
import submit from './submit';

const allInputBoxes = document.getElementsByTagName('input');
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submit);

function checkAllInputBoxes() {
    let isCorrect = true;
    for (let k = 0; k < allInputBoxes.length; k++) {
        if (allInputBoxes[k].classList.contains('incorrect')) isCorrect = false;
    }
    submitBtn.disabled = isCorrect ? false : true;
}

function init() {
    submitBtn.disabled = true;
    for (let k = 0; k < allInputBoxes.length; k++) {
        allInputBoxes[k].classList = 'incorrect'
        allInputBoxes[k].addEventListener('keyup', (e) => {
            if (!e.target.value) {
                allInputBoxes[k].classList = 'incorrect';
                e.target.parentElement.children[2].style.color = '#A3A1A1';
                submitBtn.disabled = true;
            } else {
                allInputBoxes[k].classList = 'correct';
                e.target.parentElement.children[2].style.color = 'transparent';
                checkAllInputBoxes();
            };
        });
    }
}

init();