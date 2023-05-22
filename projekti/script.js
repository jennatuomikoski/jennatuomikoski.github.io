const hoursEl = document.getElementById('hour')
const minutesEl = document.getElementById('minute')
const secondsEl = document.getElementById('second')
const toggle = document.getElementById('toggle')
const dateEl = document.getElementById('date')
const timeEl = document.getElementById('time')
const yearEl = document.getElementById('year')

// Tumma vaalea modin vaihtaja
toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        toggle.innerHTML = 'Light Mode';
    }
})

const days = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai']
const months = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu']

//Kellon toiminta
setInterval(() => {
    const time = new Date();
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const year = time.getFullYear();

    dateEl.innerText = `${days[day]}, ${date} ${months[month]}`
    timeEl.innerText = `${hour}:${minutes< 10? `0${minutes}`: minutes}`
    yearEl.innerText = `${year}`

    hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`

    minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`

    secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
}, 1000)