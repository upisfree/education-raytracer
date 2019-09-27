class Color {
  constructor(r, g, b, a = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  clone() {
    return new Color(this.r, this.g, this.b, this.a);
  }

  add(v) {
    return new Color(
      this.r + (v.x || v.r),
      this.g + (v.y || v.g),
      this.b + (v.z || v.b),
      this.a + (v.w || v.a)
    );
  }

  scale(f, multAlpha = false) {
    let c = new Color(this.r * f, this.g * f, this.b * f, this.a)

    if (multAlpha) {
      c.a *= f;      
    }

    return c;
  }
}

const COLORS = {
  BLACK: new Color(0, 0, 0),
  WHITE: new Color(255, 255, 255),
  RED: new Color(255, 0, 0),
  GREEN: new Color(0, 255, 0),
  BLUE: new Color(0, 0, 255),
  IVORY: new Color(102, 102, 76),
  RED_RUBBER: new Color(74, 25, 24),
}

export {
  Color as default,
  COLORS
};