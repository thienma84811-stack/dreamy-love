const spaceTravel = document.querySelector("#spaceTravel");
const travelStars = document.querySelector("#travelStars");
const travelOrbitGroup = document.querySelector(".orbit-group");
const travelMessage = document.querySelector("#travelMessage");

const travelIsMobile = window.innerWidth <= 600;
const travelStarCount = travelIsMobile ? 40 : 75;

for (let i = 0; i < travelStarCount; i++) {
    const star = document.createElement("div");

    star.classList.add("travel-star");

    const angle = Math.random() * Math.PI * 2;
    const distance = 300 + Math.random() * 500;

    star.style.setProperty(
        "--move-x",
        `${Math.cos(angle) * distance}px`
    );

    star.style.setProperty(
        "--move-y",
        `${Math.sin(angle) * distance}px`
    );

    star.style.animationDelay = `${Math.random() * 0.8}s`;

    travelStars.appendChild(star);
}

window.playSpaceTravel = function () {
    return new Promise(function (resolve) {

        const message = "Chào chị, đến với không gian của em ♡";
        let index = 0;

        travelMessage.textContent = "";
        travelMessage.classList.remove("show");

        spaceTravel.classList.add("active", "fast");

        setTimeout(function () {
            spaceTravel.classList.remove("fast");
            spaceTravel.classList.add("slow");
        }, 4000);

        setTimeout(function () {
            travelMessage.classList.add("show");

            function typeMessage() {
    if (index >= message.length) return;

    travelMessage.textContent += message.charAt(index);
    index++;

    setTimeout(typeMessage, 110);
}

typeMessage();

        }, 5500);

        setTimeout(function () {
            spaceTravel.classList.remove("active", "slow");

            if (travelOrbitGroup) {
                travelOrbitGroup.classList.add("arrived");
            }

            resolve();
        }, 12000);

    });
};