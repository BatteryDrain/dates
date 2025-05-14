DATE = [
    ["1/1","New Year's","event"],
    ["14/1/2005","Martin's birthday","birthday"],
    ["17/3/2003","Vanja's birthday","birthday"],
    ["7/4/2004","Evan's birthday","birthday"],
    ["11/5","mother's day","event"],
    ["15/6","father's day","event"],
    ["14/7/2007","Thomas' birthday","birthday"],
    ["25/11","christmas", "event"]
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
    let [day, month, year] = DATE[index][0].split("/").map(Number);
    then = new Date (currentYear,month - 1,day);
    then.setHours(0, 0, 0, 0);
    diffTime = then - currentDate;
    diffTime = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    daysuntil.push(diffTime);

    fig = document.createElement('figure');
    fig.setAttribute("data-tag", DATE[index][2]);
    fig.setAttribute("data-day", day);
    fig.setAttribute("data-month", month);
    fig.setAttribute("data-diffrence", diffTime);
    fig.classList.add(DATE[index][2]);


    title = document.createElement('figcaption');
    title.innerHTML = day + " of " + MONTHS[parseInt(month) - 1];
    fig.appendChild(title);

    description = document.createElement('p');
    description.innerHTML = "There are " + diffTime + " days until " + DATE[index][1];
    fig.appendChild(description);

    content.appendChild(fig);
}