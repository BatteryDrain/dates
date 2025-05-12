DATE = [
    "7/4/2004",
    
    ]
TITLE = [
    "Evan's birthday",

    ]
TAG = [
    "birthday",
]
MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const currentDate = new Date();
console.log(currentDate);
let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate. getFullYear();
current.innerHTML = currentDay + " of " + MONTHS[currentMonth] + " of " + currentYear;

buildcontent();

function buildcontent() {
    for(index = 0; index < DATE.length; index++){
        figbuilder(index);
    }
}

function figbuilder(index){
    let [day, month, year] = DATE[index].split("/");
    fig = document.createElement('figure');
    fig.setAttribute("data-tag", TAG[index]);
    fig.setAttribute("data-day", day);
    fig.setAttribute("data-month", month);


    title = document.createElement('figcaption');
    title.innerHTML = day + " of " + MONTHS[parseInt(month)];
    fig.appendChild(title);

    description = document.createElement('p');
    description.innerHTML = TITLE[index];
    fig.appendChild(description);

    content.appendChild(fig);
}