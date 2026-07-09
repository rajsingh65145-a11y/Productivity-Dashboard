const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");

const prev = document.getElementById("prev");
const next = document.getElementById("next");


const eventDate = document.getElementById("eventDate");
const eventText = document.getElementById("eventText");
const addEvent = document.getElementById("addEvent");

const eventList = document.getElementById("eventList");



let date = new Date();


let events =
JSON.parse(localStorage.getItem("events")) || [];



function renderCalendar(){


    calendar.innerHTML="";


    let year=date.getFullYear();

    let month=date.getMonth();



    let firstDay =
    new Date(year,month,1).getDay();


    let lastDate =
    new Date(year,month+1,0).getDate();



    monthYear.innerText =
    date.toLocaleString(
        "default",
        {
            month:"long",
            year:"numeric"
        }
    );



    for(let i=0;i<firstDay;i++){

        let blank=document.createElement("div");

        calendar.appendChild(blank);

    }



    for(let i=1;i<=lastDate;i++){


        let day=document.createElement("div");

        day.classList.add("date");


        day.innerText=i;



        let today=new Date();


        if(
            i===today.getDate() &&
            month===today.getMonth() &&
            year===today.getFullYear()
        ){

            day.classList.add("today");

        }



        calendar.appendChild(day);


    }

}



prev.onclick=()=>{

    date.setMonth(
        date.getMonth()-1
    );

    renderCalendar();

}



next.onclick=()=>{

    date.setMonth(
        date.getMonth()+1
    );

    renderCalendar();

}




function saveEvents(){

    localStorage.setItem(
        "events",
        JSON.stringify(events)
    );

}



function displayEvents(){

    eventList.innerHTML="";


    events.forEach((event,index)=>{


        let li=document.createElement("li");


        li.innerHTML=`

        📅 ${event.date}
        <br>
        ${event.text}

        <button onclick="deleteEvent(${index})">
        ❌
        </button>

        `;


        eventList.appendChild(li);


    });


}



addEvent.onclick=()=>{


    if(
        eventDate.value==="" ||
        eventText.value===""
    ){

        alert("Fill all fields");

        return;

    }



    events.push({

        date:eventDate.value,

        text:eventText.value

    });



    saveEvents();

    displayEvents();



    eventDate.value="";

    eventText.value="";


}




function deleteEvent(index){

    events.splice(index,1);

    saveEvents();

    displayEvents();

}




renderCalendar();

displayEvents();