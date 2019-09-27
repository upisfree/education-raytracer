import { COLORS } from './color.js';
import Vector3 from './vector3.js';

class Material {
  constructor(diffuse, specular, albedo) {
    this.diffuse = diffuse;
    this.specular = specular;
    this.albedo = albedo; // это Vector2, на самом деле
  }
}

const MATERIALS = {
  IVORY: new Material(COLORS.IVORY, 3, new Vector3(0.6, 0.3, 1)),
  RED_RUBBER: new Material(COLORS.RED_RUBBER, 2, new Vector3(0.9, 0.1, 1))
}

export {
  Material as default,
  MATERIALS
};