const mainLinks = {
    discord: "https://discord.gg/nD5AGcnx",
    steam: "https://www.twitch.tv/ma1ojqa",
    vk: "https://vk.com/ajiecb",
    twitch: "https://www.twitch.tv/ma1ojqa",
    minecraft: "https://www.twitch.tv/ma1ojqa",
}


const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const nik = document.querySelector(".nik");
nik.addEventListener("mouseenter", defaultFon)


for (const item of btns) {   
    item.addEventListener("click", goToSite)
    item.addEventListener("mouseenter", changeFon)
    const atr =  item.firstChild.getAttribute("name");

    function goToSite(){
        window.location.href = mainLinks[atr];
    }

    function changeFon(){
        setTimeout(()=>{
            container.style.backgroundImage = `url(/img/fon/${atr}-fon.jpg)`;
        }, 0)
    }   
}

function defaultFon(){
    setTimeout(()=>{
        console.log("def")
        container.style.backgroundImage = 'url(/img/fon/default-fon.jpg)';
    }, 0)
}