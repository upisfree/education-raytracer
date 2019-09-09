import Vector3 from './vector3.js';
import Ray from './ray.js';

class Sphere {
  constructor(position, radius, color) {
    this.position = position;
    this.radius = radius;
    this.color = color;
  }

  rayIntersection(origin, direction, distance) {
    let ray = new Ray();

    let l = this.position.clone().sub(origin);
    let tca = l.clone().dot(direction);

    let d2 = l.dot(l) - tca * tca;
    let radius2 = this.radius * this.radius;

    if (d2 > radius2) {
      ray.intersects = false;
      ray.distance = distance;

      return ray;
    }

    let thc = Math.sqrt(radius2 - d2);
    let t0 = tca - thc;
    let t1 = tca + thc;

    if (t0 < 0.0) {
      t1 = [t0, t0 = t1][0]; // swap function
    }

    if (t0 >= 0.0) {
      ray.intersects = true;
    } else {
      ray.intersects = false;
    }

    ray.distance = t0;

    return ray;

    // let distanceToSphereCenter = origin.sub(this.position);
    // let a = 1; // dotProduct(rayDirection, rayDirection); as direction normalized result always will be equal to 1
    // let b = 2 * direction.dot(distanceToSphereCenter);
    // let c = distanceToSphereCenter.dot(distanceToSphereCenter) - this.radius * this.radius;
    // let d = b * b - 4 * a * c;
    // let distanceToSphere = (-b - Math.sqrt(d)) / 2 * a; // we get only root with -b, because it gives us nearest from two intersection points
 
    // console.log(distanceToSphere);

    // if (distanceToSphere < Number.MAX_SAFE_INTEGER && distanceToSphere > 0){ //nearest, but not behind the ray
    //   return true;
    // } else {
    //   return false;
    // }
  }
}

export default Sphere;