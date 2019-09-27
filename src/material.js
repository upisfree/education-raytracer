import { COLORS } from './color.js';

class Material {
  constructor(diffuse, specular, albedo = 1) {
    this.diffuse = diffuse;
    this.specular = specular;
    this.albedo = albedo;
  }
}

const MATERIALS = {
  IVORY: new Material(COLORS.IVORY, 1),
  RED_RUBBER: new Material(COLORS.RED_RUBBER, 1)
}

export {
  Material as default,
  MATERIALS
};