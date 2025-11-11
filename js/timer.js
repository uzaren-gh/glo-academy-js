timer = () => {
    let interval;

    const numWord = (value, words) => {
        value = Math.abs(value) % 100;
        const lastNum = value % 10;

        if (value > 10 && value < 20) return words[2];
        if (lastNum > 1 && lastNum < 5) return words[1];
        if (lastNum === 1) return words[0];
        return words[2];
    }


    const updateTimer = () => {
        const date = new Date();
        const deadLine = new Date('2025.11.12 09:00:00').getTime();
        const timeRemaining = (deadLine - date) / 1000;

        const days = Math.floor(timeRemaining / 60 / 60 / 24);
        const hours = Math.floor(timeRemaining / 60 / 60 % 24);
        const minutes = Math.floor(timeRemaining / 60 % 60);
        const seconds = Math.floor(timeRemaining % 60);

        const daysBlock = document.querySelector('.timer__days');
        daysBlock.nextElementSibling.textContent = numWord(days, ['день', 'дня', 'дней']);
        const hoursBlock = document.querySelector('.timer__hours');
        hoursBlock.nextElementSibling.textContent = numWord(hours, ['час', 'часа', 'часов']);
        const minutesBlock = document.querySelector('.timer__minutes');
        minutesBlock.nextElementSibling.textContent = numWord(minutes, ['минута', 'минуты', 'минут']);
        const secondsBlock = document.querySelector('.timer__seconds');
        secondsBlock.nextElementSibling.textContent = numWord(seconds, ['секунда', 'секунды', 'секунд']);


        daysBlock.textContent = days < 10 ? '0' + days : days;
        hoursBlock.textContent = hours < 10 ? '0' + hours : hours;
        minutesBlock.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsBlock.textContent = seconds < 10 ? '0' + seconds : seconds;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            daysBlock.textContent = '00';
            daysBlock.style.color = 'red';
            hoursBlock.textContent = '00';
            hoursBlock.style.color = 'red';
            minutesBlock.textContent = '00';
            minutesBlock.style.color = 'red';
            secondsBlock.textContent = '00';
            secondsBlock.style.color = 'red';
        }
    }

    interval = setInterval(updateTimer, 500);
}

timer()