const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
let img;
let video;
let mycanvas = document.getElementById('mycanvas');

function setup() {
    let idd = 0;

    if(window.innerHeight>window.innerWidth){
        idd = window.innerWidth; 
    }else{
        idd = window.innerHeight; 
    }
    createCanvas(idd,idd,mycanvas);
    video = createCapture(VIDEO);
    translate(video.width, 0);
    scale(-1,1);
    video.size(48,48);
    video.hide();
}

function draw(){
    background(0);
    // image(img, 0,0, width,height);
    // Going to calc avg each pixel of the image;
    img = video;
    let w = width / img.width;
    let h = height / img.height;
    img.loadPixels();
    for(let i=0;i<img.width;i++){
        for(let j=0;j<img.height;j++){
            const pixelIndex = (i+j*img.width)*4;
            const r = img.pixels[pixelIndex + 0];
            const g = img.pixels[pixelIndex + 1];
            const b = img.pixels[pixelIndex + 2];
            // Calculate the brigthness value;
            // That is the average of the pixels
            
            const avg = floor((r+g+b)/3);
            
            noStroke();            
            fill(r,g,b);
            
            
            const len = density.length;
            const charIndex = floor (map(avg,0,255,len,0));

            textSize(w);
            textAlign(CENTER,CENTER);
            text(density[charIndex],i*w + w*0.5,j*h + h*0.5);
        }
    }
}