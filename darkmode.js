const toggleBtn = document.getElementById("toggleBtn");

const modeText = document.getElementById("modeText");



// saved theme check

let theme = localStorage.getItem("theme");


if(theme === "dark"){

    document.body.classList.add("dark");

    modeText.innerText="Dark Mode";

    toggleBtn.innerText="☀️ Light Mode";

}





toggleBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){


        modeText.innerText="Dark Mode";

        toggleBtn.innerText="☀️ Light Mode";


        localStorage.setItem(
            "theme",
            "dark"
        );


    }

    else{


        modeText.innerText="Light Mode";

        toggleBtn.innerText="🌙 Dark Mode";


        localStorage.setItem(
            "theme",
            "light"
        );


    }


});