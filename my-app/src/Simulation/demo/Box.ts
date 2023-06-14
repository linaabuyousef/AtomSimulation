import * as THREE from 'three';
import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

const data = [
  { t: 0.000000E+00, r: 5.297721E-09, rPrime: 0.000000E+00, rDoublePrime: 0.000000E+00, phi: 0.000000E+00, phiPrime: 4.124861E+16, theta: 1.570796E+00, thetaPrime: 0.000000E+00, thetaDoublePrime: 1.041837E+17, deltaPhi: 0.000000E+00 },
  { t: 5.000000E-19, r: 5.297716E-09, rPrime: -1.012110E+04, rDoublePrime: -1.011740E+22, phi: 4.124452E-02, phiPrime: 4.124869E+16, theta: 1.570796E+00, thetaPrime: 1.041735E-01, thetaDoublePrime: 1.041845E+17, deltaPhi: 0.000000E+00 }
];

export class Box extends THREE.Mesh {

  constructor() {
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    super(sphereGeometry, material);
  }

  // animate() {
  //   let index = 0;
  //   if (index < data.length) {
  //     const { r, phi, theta } = data[index];
  //     const x = r * Math.sin(theta) * Math.cos(phi);
  //     const y = r * Math.sin(theta) * Math.sin(phi);
  //     const z = r * Math.cos(theta);
  //     this.sphere.position.set(x, y, z);
  //     index++;
  //   }
  // }
}
