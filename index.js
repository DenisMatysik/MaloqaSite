// Навигация
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");

const colorTheme = {
    1:  {
        main: "#3877d4",
        hover: "#5c8dd2",
    },
    2:  {
        main: "#322a65",
        hover: "#a25f92",
    },
    3:  {
        main: "#6267a1",
        hover: "#dab9d6",
    },
    4:  {
        main: "#6a5951",
        hover: "#f7a47c",
    },
    5:  {
        main: "#ad3034",
        hover: "#f2a790",
    },
    6:  {
        main: "#66000b",
        hover: "#fd6c79",
    },
    7:  {
        main: "#267379",
        hover: "#50be8f",
    },
    8:  {
        main: "#603c7a",
        hover: "#ba93c0",
    },
}

const mainLinks = {
    discord:{
        link:"https://discord.gg/nD5AGcnx",
        imageLink: "./img/discord.png",
        mes: "Я в discord",
    },
    steam:{
        link:"https://www.twitch.tv/ma1ojqa",
        imageLink: "./img/steam.png",
        mes: "Я в steam",
    },
    vk:{
        link:"https://vk.com/ajiecb",
        imageLink: "./img/vk.png",
        mes: "Я в vk",
    },
    twitch:{
        link:"https://www.twitch.tv/ma1ojqa",
        imageLink: "./img/twitch.png",
        mes: "Я в twitch",
    },
    minecraft:{
        link:"https://www.twitch.tv/ma1ojqa",
        imageLink: "./img/minecraft.png",
        mes: "Я в minecraft",
    },
}

for (key in mainLinks){
    const btn= document.createElement("button");
    const img = document.createElement("img");
    btn.classList.add("btn");
    img.classList.add("img");
    btn.setAttribute("name", `${this.key}`);
    img.setAttribute("name", `${this.key}`);
    img.setAttribute("src", `${mainLinks[this.key].imageLink}`);
    nav.appendChild(btn);
    btn.append(img);
    btn.addEventListener("click", goToSite);
    btn.addEventListener("mouseover", showBtnMess);
    btn.addEventListener("mouseout", closeBtnMess);
    
    function goToSite(event){
        console.log(event.target)
        window.location.href = mainLinks[event.target.name].link;
    }

    function showBtnMess(event){
        const btnMes = document.createElement("div");
        btnMes.classList.add('btnMes');
        btnMes.innerHTML = mainLinks[event.target.name].mes;
        btn.appendChild(btnMes);
    }

    function closeBtnMess(){
        document.querySelector(".btnMes").remove();
    }
}


// Всё что связано с NickName
const nik = document.querySelector(".nik");
nik.addEventListener("mouseover", showNick)
nik.addEventListener("mouseout", closeNick)

function showNick (){
    const message = document.createElement("div");
    message.classList.add('message');
    message.innerHTML = "Мой никнейм";
    nik.appendChild(message);
}

function closeNick(){
    document.querySelector(".message").remove();
}

// Начальная устанввка фона и его смена
window.onload = randomBackGroundImage;
function randomBackGroundImage(){
    let randomNumber = Math.ceil((Math.random()*8)); // меняется картинка 
    container.style.backgroundImage = `url(./img/fon/${randomNumber}.jpg)`;
}

function changeFon(){
    setInterval(randomBackGroundImage, 30000) // каждые 30секунд меняется фон
    }   
changeFon();