// =========================
// MUSIC
// =========================
let music = document.getElementById("bgMusic");

function playMusic(){
    if(music){
        music.volume = 0.5;
        music.play().catch(()=>{});
    }
}


// =========================
// Tombol IYA ❤️
// =========================
function acceptLove(){

    playMusic();

    document.getElementById("content").innerHTML = `
    <h1>❤️ Terima Kasih ❤️</h1>
    <h2>Mulai hari ini kita resmi bersama 🥰</h2>
    <p>💖💖💖</p>
    ❤️✨🥰✨❤️
    `;

    firework();

    setInterval(()=>{
        for(let i=0;i<5;i++){
            createHeart();
        }
    },300);
}


// =========================
// Tombol TIDAK 😢
// =========================
function rejectLove(){

    playMusic();

    document.getElementById("content").innerHTML = `
    <h1>😢 Tidak Apa-Apa</h1>
    <h2>Terima kasih sudah membaca</h2>
    <p>Semoga kamu selalu bahagia 🌸</p>
    😔💔🥺
    `;
}


// =========================
// FIREWORK
// =========================
function firework(){

    let interval = setInterval(()=>{

        for(let i=0;i<20;i++){

            let fw = document.createElement("div");
            fw.className = "firework";

            fw.style.left = window.innerWidth/2 + "px";
            fw.style.top = window.innerHeight/2 + "px";

            document.body.appendChild(fw);

            let angle = Math.random()*Math.PI*2;
            let radius = 200+Math.random()*150;

            let x = Math.cos(angle)*radius;
            let y = Math.sin(angle)*radius;

            fw.animate([
                { transform:"translate(0,0)", opacity:1 },
                { transform:`translate(${x}px,${y}px)`, opacity:0 }
            ],{
                duration:1500
            });

            setTimeout(()=>fw.remove(),1500);
        }

    },800);

    setTimeout(()=>clearInterval(interval),3000);
}


// =========================
// ANIMASI LOVE ❤️
// =========================
function createHeart(){

    let heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random()*30) + "px";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let duration = 3000 + Math.random()*2000;

    heart.animate([
        { transform:"translateY(0)", opacity:1 },
        { transform:"translateY(-120vh)", opacity:0 }
    ],{
        duration:duration
    });

    setTimeout(()=>heart.remove(),duration);
}


// =========================
// LOVE LOOP
// =========================
setInterval(()=>{
    createHeart();
},500);


// =========================
// NO BUTTON SAFE FIX
// =========================
window.addEventListener("DOMContentLoaded",()=>{

    const noBtn = document.getElementById("noBtn");

    if(noBtn){

        noBtn.addEventListener("mouseover",()=>{
            noBtn.style.left = Math.random()*200-100+"px";
            noBtn.style.top = Math.random()*150-75+"px";
        });

        noBtn.addEventListener("click",()=>{
            noBtn.style.left = Math.random()*200-100+"px";
            noBtn.style.top = Math.random()*150-75+"px";
        });

    }

});