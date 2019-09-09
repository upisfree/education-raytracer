class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;

    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;

    return this;
  }

  mult(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;

    return this;
  }

  div(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;

    return this;
  }

  scale(f) {
    this.x *= f;
    this.y *= f;
    this.z *= f;

    return this;
  }

  dot(v = this) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalize() {
    let l = this.length();

    return new Vector3(this.x / l, this.y / l, this.z / l);
  }
}

export default Vector3;