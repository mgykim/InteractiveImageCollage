let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let koala;


function preload() {
  img1 = loadImage('1.jpg');
  img2 = loadImage('2.jpg');
  img3 = loadImage('3.jpg');
  img4 = loadImage('4.jpg');
  img5 = loadImage('5.jpg');
  img6 = loadImage('6.jpg');
  img7 = loadImage('7.jpg');
  img8 = loadImage('8.jpg');
  img9 = loadImage('9.jpg');
  img10 = loadImage('10.jpg');
  img11 = loadImage('11.jpg');
  img12 = loadImage('12.jpg');
  koala = loadImage('koala.png');
}

function setup() {
  createCanvas(800, 700);
  pixelDensity(1);
  image (koala, 0, 0);
  // image (img1, 0, 0);
  // image (img2, 200, 0);
  // image (img3, 400, 0);
  // image (img4, 600, 0);
  // image (img5, 0, 225);
  // image (img6, 200, 225);
  // image (img7, 400, 225);
  // image (img8, 600, 225);
  // image (img9, 0, 450);
  // image (img10, 200, 450);
  // image (img11, 400, 450);
  // image (img12, 600, 450);
}



function mouseDragged () {
  koala.loadPixels();
  let size;
  
  let index, pix;
  
  if(mouseX>0 && mouseX<200){
  //for image1

        for (let i=0; i<10; i++) {
         index = getIndex((mouseX, mouseY));
          if(mouseY>0 && mouseY<225){
            size = 10;
          } 
          if(mouseY>225 && mouseY<450){
            size = 20;
          }
          if(mouseY>450 && mouseY<700){
            size = 30;
          }
          pix = koala.get(mouseX, mouseY);
         

        fill(pix);
        strokeWeight(0);
        ellipse(mouseX, mouseY, size, size);
          
      }

        
    koala.updatePixels();
        
    }
}

function getIndex (x,y) {
  return (x + y*width)*4;
}

function mouseClicked(){
  loadPixels();
  let ypos;
  let ystart;
  var r, g, b, a, index;
  
  if(mouseX>200 && mouseX<400){
    if(mouseY>0 && mouseY<225){
      ypos = 225;
      ystart = 0;
      
      for (var y = ystart; y < ypos; y++) {
                for (var x = 0; x < 200; x++) {
                  index = ((x + y * width)*4)+(800);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                  if(r>170 && g>170 && b>170){
                    pixels[index+0] = 255;
                    pixels[index+1] = 159;
                    pixels[index+2] = 191;
                  }
            }
        }
    }
    if(mouseY>225 && mouseY<450){
      ypos = 450;
      ystart = 225;
      
      for (var k = ystart; k < ypos; k++) {
                for (var j = 0; j < 200; j++) {
                  index = ((j + k * width)*4)+(800);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                  if(r>150 && g>150 && b>150){
                    pixels[index+0] = 160;
                    pixels[index+1] = 216;
                    pixels[index+2] = 255;
                  }
            }
        }
    }
    if(mouseY>450 && mouseY<700){
      ypos = 700;
      ystart = 450;
      
      for (var m = ystart; m < ypos; m++) {
                for (var n = 0; n < 200; n++) {
                  
                  index = ((n + m * width)*4)+(800);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];

                  if(r>150 && g>150 && b>150){
                    pixels[index+0] = 255;
                    pixels[index+1] = 245;
                    pixels[index+2] = 160;
                  }
            }
        }
    }
      updatePixels();
  }
  
  
  
  if(mouseX>400 && mouseX<600){
    if(mouseY>0 && mouseY<225){
      ypos = 200;
      ystart = 0;
      
      for (var e = ystart; e < ypos; e++) {
                for (var d = 0; d < 225; d++) {
                  index = ((e + d * width)*4)+(1600);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                    pixels[index+0] = r+e/3;
                    pixels[index+1] = g+50;
                    pixels[index+2] = b+e/5;
            }
        }
    }
    if(mouseY>225 && mouseY<450){
      ypos = 200;
      ystart = 0;
      
      for (var o = ystart; o < ypos; o++) {
                for (var p = 225; p < 450; p++) {
                  index = ((o + p * width)*4)+(1600);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                    pixels[index+0] = r+60;
                    pixels[index+1] = g-o/1.2;
                    pixels[index+2] = b-o/1.3;
            }
        }
    }
    if(mouseY>450 && mouseY<700){
      ypos = 200;
      ystart = 0;
      
      for (var u = ystart; u < ypos; u++) {
                for (var l = 450; l < 700; l++) {
                  index = ((u + l * width)*4)+(1600);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                    pixels[index+0] = r+u/1.7;
                    pixels[index+1] = g+u/4;
                    pixels[index+2] = b+50;
            }
        }
    }
      
      updatePixels();
  }
}


function mousePressed(){
  loadPixels();
  let ypos;
  let ystart;
  var r, g, b, a, index;
  
  if(mouseX>600 && mouseX<800){
    if(mouseY>0 && mouseY<225){
      ypos = 225;
      ystart = 0;
      
      for (var y = ystart; y < ypos; y++) {
                for (var x = 400; x < 600; x++) {
                  index = ((x + y * width)*4)+(800);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                  if(r<90 && g<90 && b<90){
                    pixels[index+0] = 42;
                    pixels[index+1] = 7;
                    pixels[index+2] = 151;
                  }
                  else if(r<150 && g<150 && b<150){
                    pixels[index+0] = 76;
                    pixels[index+1] = 140;
                    pixels[index+2] = 229;
                  }
                  else{
                    pixels[index+0] = 255;
                    pixels[index+1] = 137;
                    pixels[index+2] = 213;
                  }
            }
        }
    }
    if(mouseY>225 && mouseY<450){
      ypos = 450;
      ystart = 225;
      
      for (var ab = ystart; ab < ypos; ab++) {
                for (var bc = 400; bc < 600; bc++) {
                  index = ((bc + ab * width)*4)+(800);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                  if(r<90 && g<90 && b<90){
                    pixels[index+0] = 205;
                    pixels[index+1] = 79;
                    pixels[index+2] = 81;
                  }
                  else if(r<150 && g<150 && b<150){
                    pixels[index+0] = 247;
                    pixels[index+1] = 153;
                    pixels[index+2] = 27;
                  }
                  else{
                    pixels[index+0] = 76;
                    pixels[index+1] = 229;
                    pixels[index+2] = 221;
                  }
            }
        }
    }
    if(mouseY>450 && mouseY<700){
      ypos = 700;
      ystart = 450;
      
      for (var abc = ystart; abc < ypos; abc++) {
                for (var bcd = 400; bcd < 600; bcd++) {
                  index = ((bcd + abc * width)*4)+(800);
                  r = pixels[index+0];
                  g = pixels[index+1];
                  b = pixels[index+2];
                  a = pixels[index+3];
                  
                  if(r<90 && g<90 && b<90){
                    pixels[index+0] = 144;
                    pixels[index+1] = 12;
                    pixels[index+2] = 63;
                  }
                  else if(r<150 && g<150 && b<150){
                    pixels[index+0] = 255;
                    pixels[index+1] = 107;
                    pixels[index+2] = 101;
                  }
                  else{
                    pixels[index+0] = 208;
                    pixels[index+1] = 227;
                    pixels[index+2] = 126;
                  }
            }
        }
    }
      updatePixels();
  }
}