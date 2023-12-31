//Cat rain
function cat(){
    const cat = document.createElement("div");
    cat.classList.add("cat");
    cat.innerText = "😼";
    cat.style.left=Math.random()*90+"vw";
    cat.style.animationDuration=Math.random()*2+3;
    document.body.appendChild(cat);
    setTimeout(() => {
        cat.remove();
    }, 3000)
}

let nInterId;

nInterId = setInterval(cat, 500);


//
function leftTopBtn(){
   alert("Let me show you something special!");
   clearInterval(nInterId);
   document.getElementById("catBtn").style.display="none";
   document.getElementById("topLeftBtn").style.display="none"; 
   document.getElementById("gallery").style.display="grid";
   document.body.style.backgroundImage = "url('img/happy_new_year.jpg')";
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.size = "cover";
   document.body.style.backgroundPosition = "center center";
}

