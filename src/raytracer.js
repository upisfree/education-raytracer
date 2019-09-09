import CONFIG from './config.js';
import Vector3 from './vector3.js';
import { default as Color, COLORS } from './color.js';
import gl from './gl.js';
import Sphere from './sphere.js';
import Light from './light.js';

let cameraPosition = new Vector3(0, 0, 0);

let lights = [
  new Light(
    new Vector3(-20, 20, 20),
    1.5
  )
];

let spheres = [
  new Sphere(
    new Vector3(-3, 0, -16),
    2,
    COLORS.IVORY
  ),
  new Sphere(
    new Vector3(-1, -1.5, -12),
    2,
    COLORS.RED_RUBBER
  ),
  new Sphere(
    new Vector3(1.5, -0.5, -18),
    3,
    COLORS.RED_RUBBER
  ),
  new Sphere(
    new Vector3(-7, 5, -18),
    4,
    COLORS.IVORY
  ),
];

for (let y = 0; y < gl.height; y++) {
  for (let x = 0; x < gl.width; x++) {
    let screenX = (2 * (x + 0.5) / gl.width - 1) * Math.tan(CONFIG.FOV / 2) * gl.width / gl.height;
    let screenY = -(2 * (y + 0.5) / gl.height - 1) * Math.tan(CONFIG.FOV / 2);
    let direction = new Vector3(screenX, screenY, -1).normalize();
    let color = castRay(cameraPosition, direction);

    // console.log(direction);

    gl.putPixel(
      new Vector3(x, y, 0),
      color
    );
  }
}

gl.render();



function intersectScene(origin, direction) {
  let distance = Number.MAX_SAFE_INTEGER;
  let sphere;
  let hitPoint;
  let normal;

  for (let i = 0; i < spheres.length; i++) {
    let s = spheres[i];
    let ray = s.rayIntersection(origin, direction, distance);

    if (ray.intersects && ray.distance < distance) {
      distance = ray.distance;
      hitPoint = origin.clone().add(direction.clone().scale(distance));
      normal = hitPoint.clone().sub(s.position).normalize();
      sphere = s;
    }
  }

  return {
    distance: distance,
    isHit: distance < 1000,
    hitPoint: hitPoint,
    normal: normal,
    sphere: sphere,
  };
}

function castRay(origin, direction) {
  let intersection = intersectScene(origin, direction);

  if (!intersection.isHit) {
    return CONFIG.BACKGROUND_COLOR;
  }

  let diffuseLightIntensity = 0;

  for (let i = 0; i < lights.length; i++) {
    let l = lights[i];

    let lightDirection = l.position.clone().sub(intersection.hitPoint).normalize();
    
    diffuseLightIntensity += l.intensity * Math.max(0, lightDirection.dot(intersection.normal));
  }

  let color = intersection.sphere.color;

  return color.clone().scale(diffuseLightIntensity);
}
