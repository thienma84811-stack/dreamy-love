const button = document.querySelector("#startBtn");
const opening = document.querySelector(".opening");
const gift = document.querySelector("#gift");

button.addEventListener("click", async function()  {

    button.disabled = true;

    opening.classList.add("hide");

    if(typeof window.playSpaceTravel === "function"){
        await window.playSpaceTravel();
    }

    opening.style.display = "none";
    gift.style.display = "block";

    requestAnimationFrame(function() {
        gift.classList.add("show");
    });
});

const envelope = document.getElementById("envelope");

let state = 0;

envelope.addEventListener("click", function() {

    if(state === 0){
        envelope.classList.add("open");
        state = 1;
    }

    else if(state === 1){
        envelope.classList.add("zoom");
        state = 2
    }
    
    else{
        envelope.classList.remove("zoom");

        setTimeout(function() {
            envelope.classList.remove("open");
            state = 0;
        }, 800);
    }
});