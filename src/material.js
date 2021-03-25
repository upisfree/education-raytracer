import { COLORS } from './color.js';
import Vector3 from './vector3.js';

class Material {
  constructor(diffuse, albedo, specular) {
    this.diffuse = diffuse;
    this.albedo = albedo; // это Vector2, на самом деле
    this.specular = specular;
  }
}

const MATERIALS = {
  IVORY: new Material(COLORS.IVORY, new Vector3(0.6, 0.3), 50),
  RED_RUBBER: new Material(COLORS.RED_RUBBER, new Vector3(0.9, 0.1), 10)
}

export {
  Material as default,
  MATERIALS
};