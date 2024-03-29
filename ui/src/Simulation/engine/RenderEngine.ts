import { WebGLRenderer } from 'three'
import { Engine } from './Engine'
import * as THREE from 'three'
import { GameEntity } from './GameEntity'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'

export class RenderEngine implements GameEntity {
  private readonly renderer: WebGLRenderer
  composer: EffectComposer

  

  constructor(private engine: Engine) {
    this.renderer = new WebGLRenderer({
      canvas: this.engine.canvas,
      antialias: true,
    })

    
    const viewportWidth =  document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    
    const width = viewportWidth * 0.56;  // 60vw
    const height = viewportHeight * 0.8;  // 80vh
    
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.toneMapping = THREE.CineonToneMapping
    this.renderer.toneMappingExposure = 1.75
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(this.engine.sizes.pixelRatio, 2))

    this.composer = new EffectComposer(this.renderer)

    const renderPass = new RenderPass(
      this.engine.scene,
      this.engine.camera.instance
    )
    this.composer.addPass(renderPass)
  }

  update() {
    this.composer.render()
  }

  resize() {
    console.log("Resizing renderer: ", this.engine.canvas.clientWidth, this.engine.canvas.clientHeight);
    this.renderer.setSize(this.engine.canvas.clientWidth, this.engine.canvas.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.composer.setSize(this.engine.canvas.clientWidth, this.engine.canvas.clientHeight);
    this.composer.render();
  }
  
  
}
