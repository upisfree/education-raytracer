// immutable Vector3
class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(v) {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  sub(v) {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  mult(v) {
    return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
  }

  div(v) {
    return new Vector3(this.x / v.x, this.y / v.y, this.z / v.z);
  }

  scale(f) {
    return new Vector3(this.x * f, this.y * f, this.z * f);
  }

  dot(v = this) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  neg() {
    return new Vector3(this.x * -1, this.y * -1, this.z * -1);
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