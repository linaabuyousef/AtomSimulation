import { Engine } from './Engine'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GameEntity } from './GameEntity'

export class Camera implements GameEntity {
  public instance!: THREE.PerspectiveCamera
  private controls!: OrbitControls

  constructor(private engine: Engine) {
    this.initCamera()
    this.initControls()
  }

  private initCamera() {
    this.instance = new THREE.PerspectiveCamera(
      90,
      1,
      0.1,
      2000
    )
     // increased from 2.519422356955
    this.engine.scene.add(this.instance)
  }


  private initControls() {
    this.controls = new OrbitControls(this.instance, this.engine.canvas)
    this.controls.update()
  }

  resize() {
    // This should be based on the canvas dimensions
    this.instance.aspect = this.engine.canvas.clientWidth / this.engine.canvas.clientHeight;
    this.instance.updateProjectionMatrix();
  }
  

  update() {
    this.controls.update()
  }
}
