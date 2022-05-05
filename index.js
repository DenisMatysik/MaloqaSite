const mainLinks = {
    discord:{
        link:"https://discord.gg/nD5AGcnx",
        imageLink: "./img/discord.png"
    },
    steam:{
        link:"https://www.twitch.tv/ma1ojqa",
        imageLink: "./img/steam.png"
    },
    vk:{
        link:"https://vk.com/ajiecb",
        imageLink: "./img/vk.png"
    },
    twitch:{
        link:"https://www.twitch.tv/ma1ojqa",
        imageLink: "./img/twitch.png"
    },
    minecraft:{
        link:"https://www.twitch.tv/ma1ojqa",
        imageLink: "./img/minecraft.png"
    },
}

// const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const nik = document.querySelector(".nik");
const nav = document.querySelector(".nav");


window.onload = randomBackGroundImage;

function randomBackGroundImage(){
    let randomNumber = Math.ceil((Math.random()*8)); // меняется картинка 
    container.style.backgroundImage = `url(./img/fon/${randomNumber}.jpg)`;
}

function changeFon(){
    setInterval(randomBackGroundImage, 30000) // каждые 30секунд меняется фон
    }   
changeFon();









for (const item of btns) {   
    item.addEventListener("click", goToSite)
    // item.addEventListener("mouseenter", changeFon)
    const atr =  item.firstChild.getAttribute("name");

    function goToSite(){
        window.location.href = mainLinks[atr];
    }
}