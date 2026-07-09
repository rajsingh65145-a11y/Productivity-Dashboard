const title = document.getElementById("title");
const noteText = document.getElementById("noteText");
const addNote = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");


let notes = JSON.parse(localStorage.getItem("notes")) || [];



function saveNotes(){

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}



function displayNotes(){

    notesContainer.innerHTML="";


    notes.forEach((note,index)=>{

        let div=document.createElement("div");

        div.classList.add("note");


        div.innerHTML=`

        <h2>${note.title}</h2>

        <p>${note.text}</p>

        <button class="delete" onclick="deleteNote(${index})">
        Delete
        </button>

        `;


        notesContainer.appendChild(div);

    });

}



function addNewNote(){

    if(title.value==="" || noteText.value===""){
        alert("Fill all fields");
        return;
    }


    notes.push({

        title:title.value,
        text:noteText.value

    });


    saveNotes();

    displayNotes();


    title.value="";
    noteText.value="";

}



function deleteNote(index){

    notes.splice(index,1);

    saveNotes();

    displayNotes();

}



addNote.addEventListener(
    "click",
    addNewNote
);


displayNotes();