console.log("GALAXY JS RUNNING");
const galaxyStars = document.querySelector("#galaxyStars");

const isMobile = window.innerWidth <= 600;
const starCount = isMobile ? 90 : 190;

for(let i = 0; i<starCount; i++){
const star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random() * 100 + "%";
star.style.top = Math.random() * 100 + "%";

const size = Math.random() * 2 + 1;

star.style.width = size + "px";
star.style.height = size + "px";

star.style.animationDelay = Math.random() * 4 + "s";

galaxyStars.appendChild(star);
}

const galaxyDust = document.querySelector("#galaxyDust");

const dustCount = isMobile ? 20 : 45;

for(let i = 0; i<dustCount; i++){
    const dust = document.createElement("div");

    dust.classList.add("dust");

    dust.style.left = Math.random() * 100 + "%";
    dust.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 2 + 1;

    dust.style.width = size + "px";
    dust.style.height = size + "px";

    dust.style.animationDelay = Math.random() * 12 + "s";

    galaxyDust.appendChild(dust);
}

const wishPopup = document.querySelector("#wishPopup");
const wishTitle = document.querySelector("#wishTitle");
const wishText = document.querySelector("#wishText");
const closeWish = document.querySelector("#closeWish");

const wishes = [
    {
        title: "Gửi chị...",
        text: "— Mong chị ngày nào cũng vui vẻ, không lo lắng hay có những tiêu cực."
    },
    {
        title: "Một điều muốn nói",
        text: "Cảm ơn chị vì hồi trước đã cho em 20k."
    },
    {
        title: "Gửi một lời chúc",
        text: "Dù ngày mai hay ngày kia hay tương lai thế nào, mong cuộc sống sẽ dịu dàng với chị hơn."
    },
    {
        title: "Kỷ niệm nhỏ",
        text: "Chắc lúc mới kết bạn với chị bị chị chửi như con cho :)"
    },
    {
        title: "Bí mật",
        text: "Giữa hàng triệu vì sao, hàng tỷ con người, mong chị luôn nhớ rằng em rất đặc biệt."
    }
];

let typingTimer;

function showWish(){
    console.log("SHOW WISH RUNNING");
    const wish = wishes[Math.floor(Math.random() * wishes.length)];

    wishTitle.textContent = wish.title;
    wishText.textContent = "";
    wishPopup.classList.add("show");

    clearInterval(typingTimer);

    let i = 0;

    typingTimer = setInterval(function() {
        wishText.textContent += wish.text.charAt(i);
        i++;

        if(i >= wish.text.length){
            clearInterval(typingTimer);
        }
    }, 45);
}

closeWish.addEventListener("click", function() {
    wishPopup.classList.remove("show");
    clearInterval(typingTimer);
});

wishPopup.addEventListener("click", function(event) {
    if(event.target === wishPopup){
        wishPopup.classList.remove("show");
        clearInterval(typingTimer);
    }
});

const shootingStars = document.querySelector("#shootingStars");

const orbitGroup =
document.createElement("div");
orbitGroup.classList.add("orbit-group");
document.body.appendChild(orbitGroup);

const crystalHeart = document.createElement("div");
crystalHeart.classList.add("crystal-heart");
crystalHeart.textContent = "♥";

orbitGroup.appendChild(crystalHeart);

orbitGroup.addEventListener("click", function() {
    console.log("ORBIT GROUP CLICKED");
});

for(let i = 0; i<5; i++){
    const star = document.createElement("div");

    star.classList.add("orbit-star");
    star.textContent = "✦";

    star.style.setProperty("--angle", `${i * 72}deg`);

    star.addEventListener("click", function() {
        showWish();
    });

    orbitGroup.appendChild(star);
}