import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { reduxService } from '../../store/Reduxservice';

export class Electron extends THREE.Mesh {
  private data: any;
  private index: any;
  private textSprite!: THREE.Sprite;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private pathPoints: THREE.Vector3[];
  private camera: any;
  private isAnimating: boolean;

  constructor(camera: any, data: any, engine: any) {
    const sphereGeometry = new THREE.SphereGeometry(0.9, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    super(sphereGeometry, material);

    this.data = data;
    this.index = 0;
    this.camera = camera;
    this.isAnimating = true;


    // directly use x, y and z from data
    this.pathPoints = this.data.map(({ x, y, z }: { x: number; y: number; z: number }) => {
      return new THREE.Vector3(-x , -y , -z);
    });


    const lineMaterial = new THREE.LineBasicMaterial({ color: 'black' });
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(this.pathPoints);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    engine.add(line);

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
 

    const textContent = '(X: 0 Y: 0 Z: 0)'; // Initial content to calculate canvas size
    const textMetrics = this.ctx.measureText(textContent);
    const canvasWidth = textMetrics.width;
    const canvasHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
console.log(canvasWidth)
    this.canvas.width = canvasWidth * 1000;
    this.ctx.font = 'Bold 100px Arial';
    this.ctx.fillStyle = 'black';

    const texture = new THREE.CanvasTexture(this.canvas);
    const material1 = new THREE.SpriteMaterial({ map: texture });
    this.textSprite = new THREE.Sprite(material1);
    this.textSprite.position.y = 1.5;

    this.updateText('');
    this.add(this.textSprite);

    this.animate();
  }

  updateText(text: string) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillText(text, 0, this.canvas.height);

    const material = this.textSprite.material as THREE.SpriteMaterial;
    // this.canvas.width = textMetrics.width;
    if (material && material.map) {
      material.map.needsUpdate = true;
    }
  }

  animate = () => {

    if (!this.isAnimating) {
      return;
    }

    const { x, y, z } = this.data[this.index];
    this.position.x = -x ;
    this.position.y = -y;
    this.position.z = z ? -z: 0;

    const textContent = `(X: ${ -x } Y: ${-y } Z: ${z ? -z : 0})`;
    this.updateText(textContent);

    this.index = (this.index + 1) % this.data.length;
    setTimeout(this.animate, 50);
  };

  pauseAnimation() {
    this.isAnimating = false;
  }

  resumeAnimation() {
    this.isAnimating = true;
    this.animate();
  }
  
}
