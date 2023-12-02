"use client"
import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  let show_histogram = true;
  let histogram_changed = true;
  let mask_changed = true;

  p5.preload = () => {
    
  }

  p5.setup = () => {

  }

  p5.draw = () => {
  
  }
  
  p5.keyPressed = () => {
    switch (p5.key) {
      case 'f':
        switchMask();
        break;
      case 'g':
        show_histogram = !show_histogram;
        histogram_changed = true;
        break;
      case 'h':
        switchImage();
        histogram_changed = true;
        break;
      case 'j':
        switchHistogram();
        break;
      case 'k':
        local_mode = !local_mode;
        clearMask();
        break;
      case 'v':
        brightness -= 0.1;
        applyBrightness();
        break;
      case 'b':
        brightness += 0.1;
        applyBrightness();
        break;
      case 'r':
        clearMask();
        break;
    }
  }
}


function P5Features() {

  return ( 
    <div id="canvas-container" className="h-screen flex items-center justify-center">
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default P5Features;