"use client"
import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  let img;
  let cnv;


  p5.preload = () => {
    img = p5.loadImage("./assets/images/profile-picture.jpeg");
  }

  p5.setup = () => {
    cnv = p5.createCanvas(300, 500).parent('canvas-container');
    let ncX = 200;
    let ncY = 200;
    cnv.position(ncX, ncY).parent('canvas-container');

  }

  p5.draw = () => {
    p5.background(220);

    //if (img.width > 0 && img.height > 0) {
    for (let col = 0; col < img.width; col += 10) {
      for (let row = 0; row < img.height; row += 10) {
        let xPos = col;
        let yPos = row

        let c = img.get(xPos, yPos);
        drawCustomShape(xPos, yPos, c)
      }

    }
    //}
  }

  function drawCustomShape(x, y, c) {
    p5.push();
    p5.translate(x, y);
    p5.rotate(p5.radians(p5.random(360)));
    p5.noFill();
    p5.stroke(p5.color(c));
    p5.strokeWeight(p5.random(p5.random(5)));
    p5.point(x, y);
    p5.strokeWeight(p5.random(p5.random(3)));
    p5.ellipse(0, 0, 10, 5);
    p5.curve(
      x,
      y,
      p5.sin(x) * p5.random(60),
      p5.cos(x) * p5.sin(x) * p5.random(90),
      p5.random(10),
      p5.random(80),
      p5.cos(y) * p5.sin(y) * p5.random(140),
      p5.cos(x) * p5.sin(x) * 50
    );
    p5.pop();
  }

}

function sketch2(p5) {
  //const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
  // const density = '       .:-i|=+%O#@'
  const density = '        .:░▒▓█';

  let video;
  let asciiDiv;
  let img;

  p5.preload = () => {
    img = p5.loadImage("./assets/images/profile-picture.jpeg");
  }

  p5.setup = () => {
    p5.noCanvas();
    video = p5.createCapture(p5.VIDEO);
    video.size(100, 20);
    asciiDiv = p5.createDiv();
  }

  p5.draw = () => {
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
      for (let i = 0; i < video.width; i++) {
        const pixelIndex = (i + j * video.width) * 4;
        const r = video.pixels[pixelIndex + 0];
        const g = video.pixels[pixelIndex + 1];
        const b = video.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
        const len = density.length;
        const charIndex = Math.floor(p5.map(avg, 0, 255, 0, len));
        const c = density.charAt(charIndex);
        if (c == " ") asciiImage += "&nbsp;";
        else asciiImage += c;
      }
      asciiImage += '<br/>';
    }
    asciiDiv.html(asciiImage);
    //}
  }
}


function sketch3(p5) {
  let img;
  let cnv;


  p5.preload = () => {
    img = p5.loadImage("./assets/images/profile-picture.jpeg");
  }

  p5.setup = () => {
    cnv = p5.createCanvas(300, 500).parent('canvas-container3');
    let ncX = 200;
    let ncY = 200;
    cnv.position(ncX, ncY)

  }

  p5.draw = () => {
    p5.background(220);

    //if (img.width > 0 && img.height > 0) {
    for (let col = 0; col < img.width; col += 10) {
      for (let row = 0; row < img.height; row += 10) {
        let xPos = col;
        let yPos = row

        let c = img.get(xPos, yPos);
        drawCustomShape(xPos, yPos, c)
      }

    }
    //}
  }

  function drawCustomShape(x, y, c) {
    p5.push();
    p5.translate(x, y);
    p5.rotate(p5.radians(p5.random(360)));
    p5.noFill();
    p5.stroke(p5.color(c));
    p5.strokeWeight(p5.random(p5.random(5)));
    p5.point(x, y);
    p5.strokeWeight(p5.random(p5.random(3)));
    p5.ellipse(0, 0, 10, 5);
    p5.curve(
      x,
      y,
      p5.sin(x) * p5.random(60),
      p5.cos(x) * p5.sin(x) * p5.random(90),
      p5.random(10),
      p5.random(80),
      p5.cos(y) * p5.sin(y) * p5.random(140),
      p5.cos(x) * p5.sin(x) * 50
    );
    p5.pop();
  }

}



function P5Features() {

  return (
    <div className="">
      {/* <div id="canvas-container" className="h-screen flex items-center justify-center">
        {/* <NextReactP5Wrapper sketch={sketch} /> 
      </div> */}
      
      <div id="canvas-container2" className="h-screen flex items-center justify-center">
      <NextReactP5Wrapper sketch={sketch2} />
      </div>
      {/* <div id="canvas-container3" className="h-screen flex items-center justify-center">
        <NextReactP5Wrapper sketch={sketch3} />
      </div> */}
    </div>
  );
}

export default P5Features;