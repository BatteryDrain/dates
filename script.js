DATE = [
    "7/4/2004",
    
    ];

TITLE = [
    "Evan's birthday",

    ];

TAG = [
    "birthday",
    ];

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
    ];

const currentDate = new Date();
console.log(currentDate);
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
current.innerHTML = currentDay + " of " + MONTHS[currentMonth] + " of " + currentYear;

daysuntil = [];

for(i = 0; i < DATE.length; i++){

}

buildcontent();

function buildcontent() {
    for(index = 0; index < DATE.length; index++){
        figbuilder(index);
    }
}

function figbuilder(index){
    let [day, month, year] = DATE[index].split("/").map(Number);
    then = new Date (currentYear,month - 1,day);
    then.setHours(0, 0, 0, 0);
    diffTime = then - currentDate;
    diffTime = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    daysuntil.push(diffTime);

    fig = document.createElement('figure');
    fig.setAttribute("data-tag", TAG[index]);
    fig.setAttribute("data-day", day);
    fig.setAttribute("data-month", month);
    fig.setAttribute("data-diffrence", diffTime);


    title = document.createElement('figcaption');
    title.innerHTML = day + " of " + MONTHS[parseInt(month) - 1];
    fig.appendChild(title);

    description = document.createElement('p');
    description.innerHTML = "There are " + diffTime + " days until " + TITLE[index];
    fig.appendChild(description);

    content.appendChild(fig);
}