const earningLine = () => {

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    let interval;
    let progressValue = 0;
    let maxProgress = randomInt(350000, 600000);
    console.log('maxProgress =' + maxProgress);

    courseProgress = document.querySelector('.course__progress');
    courseNumber = courseProgress.querySelector('.course__number');
    progress = document.querySelector('progress');

    courseNumber.textContent = progressValue;
    progress.value = progressValue;

    const updateProgress = () => {
        progressValue += 2505;
        courseNumber.textContent = progressValue;
        progress.value = progressValue;

        if (progressValue > maxProgress) {
            courseNumber.textContent = maxProgress;
            progress.value = maxProgress;
            clearInterval(interval);
            return;
        }
    }

    interval = setInterval(updateProgress, 2);

}

function isInMiddleZone(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const topZone = viewportHeight / 3;
    const bottomZone = 2 * viewportHeight / 3;

    const elementCenter = rect.top + rect.height / 2;

    return elementCenter >= topZone && elementCenter <= bottomZone;
}


let animationStarted = false;

function checkAndStartAnimation() {
    const el = document.querySelector('.course__progress');

    if (!animationStarted && isInMiddleZone(el)) {
        animationStarted = true;
        earningLine();
    }
}

window.addEventListener('scroll', checkAndStartAnimation);
window.addEventListener('resize', checkAndStartAnimation);

