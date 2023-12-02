import React from "react"

export default function Docs() {
  return(
<div class="max-w-8xl mx-16 mt-8 mb-8 p-8 bg-gray-800 rounded-md shadow-md border font-sans text-white-800 leading-6">

  <h1 class="text-3xl font-bold mb-4">IMAGE PROCESSING</h1>

  <h2 class="text-2xl font-semibold mb-2">INTRODUCTION:</h2>

  <p class="mb-4">
    This project is based on the principles taught in the course focused on the dynamics of image processing. It explores a wide range of applications for these technologies that allow the manipulation of images in various ways. The ability to capture images, alter their color in the RGB color space, crop, change their aspect ratio, or enlarge them are some of the highlighted functionalities.
  </p>

  <p class="mb-4">
    The core of the project is built using convolutional masks, histograms, and original images that can be processed. The main objective is to showcase more closely the benefits and potential that can be achieved through these image manipulation processes.
  </p>

  <p class="mb-4">
    The practical implementation of these concepts is carried out using the p5.js library, which facilitates the application of various filters and image processing operations to a set of predefined images. Furthermore, it provides the flexibility to load new images to apply the same principles.
  </p>

  <h2 class="text-2xl font-semibold mb-2">Image Masking:</h2>

  <p class="mb-4">
    Image masking, also known as convolution masking, is a powerful technique in image processing. It involves applying a specific filter or kernel to an image by sliding a small matrix over the entire image and performing mathematical operations at each pixel location. The resulting output image is transformed based on the characteristics of the applied filter. Kernels, typically 3x3, 5x5, or 7x7 matrices, contain weights determining the influence of each pixel. Convolution masking is utilized for tasks such as image smoothing, sharpening, edge detection, and feature extraction.
  </p>

  <h2 class="text-2xl font-semibold mb-2">Shaders Optimization for Masking:</h2>

  <p class="mb-4">
    Shaders, GPU programs in GLSL, play a crucial role in masking image operations. A vertex shader transforms image vertices into pixel coordinates, while a fragment shader calculates pixel colors and applies the kernel to neighboring pixels. Utilizing shaders enhances efficiency compared to CPU calculations.
  </p>

  <h2 class="text-2xl font-semibold mb-2">Histograms:</h2>

  <p class="mb-4">
    Histograms graphically represent the frequency of each intensity value in an image. By analyzing histograms, insights into brightness, contrast, and color balance can be gained. Histograms can be calculated for each channel of an RGB image, aiding independent analysis of color channels. Histogram equalization adjusts pixel value distribution, enhancing visual quality by improving contrast and brightness.
  </p>

  <h2 class="text-2xl font-semibold mb-2">Brightness Control:</h2>

  <p class="mb-4">
    Adjusting image brightness is a key image processing technique. It involves adding a constant value (brightness adjustment factor) to each pixel, making the image appear lighter or darker. Alternatively, brightness control using color modes like HSB or HSL allows adjusting brightness without changing pixel colors, though independent color control is sacrificed.
  </p>

  <h2 class="text-2xl font-semibold mb-2">Implementation Details</h2>

  <h3 class="text-xl font-semibold mb-2">Masking</h3>

  <p class="mb-4">
    The program utilizes preloaded kernels and images, ensuring the original image remains unaltered. Kernels, 5x5 matrices, modify the image through shader application. Vertex and fragment shaders efficiently handle image transformation and kernel application on the GPU.
  </p>

  <h3 class="text-xl font-semibold mb-2">Histogram</h3>

  <p class="mb-4">
    Histograms are graphs depicting intensity value frequency. Calculated independently for each RGB channel, histograms aid in analyzing pixel value distribution. Histogram equalization enhances image quality by adjusting pixel value distribution.
  </p>

  <h3 class="text-xl font-semibold mb-2">Brightness Control</h3>

  <p class="mb-4">
    Adjusting overall brightness is achieved by adding a constant value to each pixel. The brightness adjustment factor, positive or negative, determines brightness increase or decrease. Alternatively, color modes like HSB or HSL offer brightness control without altering pixel colors.
  </p>

  <h2 class="text-2xl font-semibold mb-2">Interactivity</h2>

<p class="mb-4">
  Challenging interactivity is implemented using flags. Flags toggle features like masking, histogram analysis, and brightness control. Additionally, state machine flags optimize the workflow by triggering updates only when necessary.
</p>

<p class="mb-4">
  Image masking, a fundamental image processing technique, finds applications in various industries, including visual effects for compositing and color corrections. Feature extraction, coupled with complex AI models, optimizes human-intensive tasks. Histogram equalization, widely used in professional photography, enhances contrast and brightness for visually appealing images. The documented techniques collectively contribute to a comprehensive understanding of image processing in diverse domains.
</p>

</div>

  ) 
}
