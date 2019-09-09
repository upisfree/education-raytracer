import Vector3 from './vector3.js';
import Color from './color.js';

const gl = {
  putPixel: function(v, c) {
    let i = (v.y * this.canvas.width + v.x) * 4;

    this.buffer.data[i]     = c.r;
    this.buffer.data[i + 1] = c.g;
    this.buffer.data[i + 2] = c.b;
    this.buffer.data[i + 3] = c.a;
  },

  render: function() {
    this.context.putImageData(this.buffer, 0, 0);
  }
};

gl.canvas = document.querySelector('canvas');
gl.context = gl.canvas.getContext('2d');
gl.width = gl.canvas.width;
gl.height = gl.canvas.height;
gl.buffer = gl.context.createImageData(gl.width, gl.height);

export default gl;