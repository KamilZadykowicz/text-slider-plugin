// SSLIDER CAROUSEL
// You can set how often sliders are changing in sec's  (ssliderTime) !!!
const ssliderTime = 4;
const ssliderText = ["Donec non tempor augue, at mattis nisl", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Maecenas ullamcorper nibh et nisl malesuada"];
const ssliderSubtext = ["Nunc ullamcorper tellus", "Suspendisse dictum diam et consequat ", "Integer lacus lacus, aliquet nec orci eget"];
const ssliderLength = ssliderText.length;
let ssliderActive = 0;
let ssliderCount = ssliderTime;

const sslider = document.getElementById("sslider");
const ssliderHeader = document.getElementById("sslider__header");
const ssliderSubheader = document.getElementById("sslider__subheader");

const ssliderChangeTxt = () => {
    ssliderHeader.innerHTML = ssliderText[ssliderActive];
    ssliderSubheader.innerHTML = ssliderSubtext[ssliderActive];
}

ssliderChangeTxt();

// ANIMATE CHANGING TXT
const ssliderAnimateTxt = () => {
    sslider.classList.add("sslider--rotate");
    setTimeout(function(){
        ssliderChangeTxt();
        sslider.classList.remove("sslider--rotate");
    }, 700);
};

// MAIN FUNCTION ANIMATE
setInterval(function(){
    if(ssliderCount>0){
        ssliderCount--;
    }
    else {
        // FUNCTION TO CHANGE TXT
        if(ssliderActive<ssliderLength-1) {
            ssliderActive++;
        }
        else if (ssliderActive==ssliderLength-1) {
            ssliderActive=0;
        }
        // ssliderChangeTxt();
        ssliderAnimateTxt()
        ssliderCount = ssliderTime;
    }
},1000);