import { Engine } from '../engine/Engine'
import * as THREE from 'three'
import { Electron } from './Electron'
import { Experience } from '../engine/Experience'
import { Resource } from '../engine/Resources'
import { reduxService } from '../../store/Reduxservice';

export class Demo implements Experience {
  resources: Resource[] = []
  private animatedObjects: Array<any> = [];
  
  constructor(private engine: Engine) {}

  init() {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshStandardMaterial({ color: '#F0F8FF' })
    )

    const data = reduxService.electron;

    let allOrbits = [].concat(...data.electron.map((elec: any) => elec.orbits));

    let maxX = Math.max(...allOrbits.map((orbit: any) => orbit.x));
    let maxY = Math.max(...allOrbits.map((orbit: any) => orbit.y));
    let maxZ = Math.max(...allOrbits.filter((orbit: any) => orbit.z !== undefined).map((orbit: any) => orbit.z || 0));

    this.engine.camera.instance.position.x =  maxX 
    this.engine.camera.instance.position.y = maxY
    this.engine.camera.instance.position.z = maxZ !== 0 ? maxZ : 7

    plane.rotation.x = -Math.PI / 2
    plane.receiveShadow = true
    this.engine.scene.add(new THREE.AmbientLight('#F0F8FF', 0.2))
    this.engine.scene.background = new THREE.Color(0xffffff)

    const yAxis = new THREE.Vector3(0, 1, 0);
    const yArrow = new THREE.ArrowHelper(yAxis, new THREE.Vector3(0, 0, 0), maxY + 0.3*maxY, 'black');
    this.engine.scene.add(yArrow);
    this.engine.scene.add(createLabel('Y', new THREE.Vector3(0, maxY + 0.3*maxY, 0)));
    
    const xAxis = new THREE.Vector3(1, 0, 0);
    const xArrow = new THREE.ArrowHelper(xAxis, new THREE.Vector3(0, 0, 0), maxX + 0.3*maxX, 'black');
    this.engine.scene.add(xArrow);
    this.engine.scene.add(createLabel('X', new THREE.Vector3(maxX + 0.3*maxX, 0, 0)));
    
    if(data.dimension === '3D'){
        const zAxis = new THREE.Vector3(0, 0, 1);
        const zArrow = new THREE.ArrowHelper(zAxis, new THREE.Vector3(0, 0, 0), maxZ + 0.3*maxZ, 'black');
        this.engine.scene.add(zArrow);
        this.engine.scene.add(createLabel('Z', new THREE.Vector3(0, 0, maxZ + 0.3*maxZ)));
    }
    
    
    function createLabel(text: string, position: THREE.Vector3): THREE.Sprite {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
    
      if (!context) {
        throw new Error('Failed to get 2D context for canvas');
      }
    
      context.font = 'Bold 20px Arial';
      context.fillStyle = 'black';
      context.fillText(text, 0, 20);
    
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
    
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        sizeAttenuation: false,
        depthTest: false,
        depthWrite: false
      });
    
      const sprite = new THREE.Sprite(material);
      sprite.position.copy(position);
      sprite.scale.set(0.5, 0.25, 1);
    
      return sprite;
    }

    
    data.electron.map((elec: any) => {
      const electron = new Electron( elec.orbits, this.engine.scene)
      electron.castShadow = true
      electron.rotation.y = Math.PI / 2
      electron.position.set(0, 0, 0)
      this.engine.scene.add(electron)
      this.animatedObjects.push(electron); 
    })
  }

  pauseAnimation() {
    for (let obj of this.animatedObjects) {
      obj.pauseAnimation();
    }
  }

  resumeAnimation() {
    for (let obj of this.animatedObjects) {
      obj.resumeAnimation();
    }
  }

  resize() {}
  update() {}
}
