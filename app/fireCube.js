import * as THREE from 'three'
import TWEEN from 'tween.js'
import { getRandomArbitrary } from './util'
import CONFIG from './config'

class FireCube {
  constructor() {
    this.geometry = new THREE.BoxGeometry( 1, 1, 1)
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // this.mesh.position()

    this.animationDuration = CONFIG.animDuration;
    this.animationDelay = getRandomArbitrary(CONFIG.animDelayMin, CONFIG.animDelayMax)

    this.targetPosition = { x: 0, y: 2, z: 0 }
    this.targetScale = {x: 0.001, y:0.001, z: 0.001}

    this.tween = this.loopAnimate()

  }

  loopAnimate() {
    var tween = new TWEEN.Tween(this.mesh.position)
      .delay(this.animationDelay)
      .onStart(this.animateScale.bind(this))
      .onComplete(function() {
        this.animationDelay = getRandomArbitrary(CONFIG.animDelayMin, CONFIG.animDelayMax)
        this.mesh.position.set(0, 0, 0)
        tween.start();
      }.bind(this))
      .to(this.targetPosition, this.animationDuration)
      // .easing(TWEEN.Easing.Quadratic.In)

    tween.start();
  }


  animateScale() {
    new TWEEN.Tween(this.mesh.scale)
    .onComplete(function() {
        this.mesh.scale.set(1, 1, 1)
    }.bind(this))
    .to(this.targetScale, this.animationDuration).start();
  }

}

export default FireCube
