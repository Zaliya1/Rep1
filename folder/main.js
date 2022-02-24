const elements = document.body.querySelectorAll('p');
const timer = function (){
    let date = new Date();

    const times = date.getHours();
    if(times >=6 && times <11) {
        elements[0].textContent = "Доброе утро";
    } else if (times >=11 && times <17) {
        elements[0].textContent = "Добрый день";
    } else if (times >=17 && times <21) {
        elements[0].textContent = "Добрый вечер";
    } else if (times >=21 || times <6) {
        elements[0].textContent = "Доброй ночи";
    }

    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let weekDay = date.getDay();
    elements[1].textContent = "Сегодня: " + week[weekDay -1];

    const time = date.toLocaleTimeString('en-US');
    elements[2].textContent = "Текущее время: " + time;

    const newYearDate = new Date(2022,11,31,23,59,59);
    let milisecond = newYearDate.getTime() - date.getTime();
    let daysToNewYear = Math.floor(milisecond / 86400000);
    elements[3].textContent = "До нового года осталось " + daysToNewYear + " дней";
};
timer();
setInterval(timer, 1000);
