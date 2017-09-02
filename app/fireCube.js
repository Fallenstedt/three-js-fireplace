import * as THREE from 'three'
import TWEEN from 'tween.js'
import { getRandomArbitrary } from './util'
import CONFIG from './config'

class FireCube {
  constructor() {

    this.emissiveIntensity = 1
    this.geometry = new THREE.BoxGeometry( 1, 1, 1)
    this.material = new THREE.MeshLambertMaterial({
      color: CONFIG.orangeRed,
      emissive: CONFIG.orangeRed,
      emissiveIntensity: this.emissiveIntensity
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material);


    this.pointLight = new THREE.PointLight(0xFF4500, 1, 10, 2)
    this.pointLight.shadow.camera.near = 1
    this.pointLight.shadow.camera.far = 1000
    this.pointLight.shadow.bias = 0.001;
    this.pointLight.castShadow = true;
    this.pointLight.position.set(0, 0, 0.4)
    this.mesh.add(this.pointLight)

    this.xPosition = getRandomArbitrary(-2.0, 2.0)
    this.yPosition = getRandomArbitrary(-2.0, 2.0)
    this.mesh.position.set(this.xPosition, this.yPosition, 0)

    this.animationDuration = CONFIG.animDuration;
    this.animationDelay = getRandomArbitrary(CONFIG.animDelayMin, CONFIG.animDelayMax)

    this.targetPosition = { x: this.xPosition, y: this.yPosition, z: 5 }
    this.targetScale = {x: 0.001, y:0.001, z: 0.001}

    this.tween = this.loopAnimate()
  }

  loopAnimate() {
    var tween = new TWEEN.Tween(this.mesh.position)
      .delay(this.animationDelay)
      .onStart(this.animateScaleAndLightIntensity.bind(this))
      .onComplete(function() {
        this.animationDelay = getRandomArbitrary(CONFIG.animDelayMin, CONFIG.animDelayMax)
        this.mesh.position.set(this.xPosition, this.yPosition, 0)
        tween.start();
      }.bind(this))
      .to(this.targetPosition, this.animationDuration)
      // .easing(TWEEN.Easing.Quadratic.In)

    tween.start();
  }


  animateScaleAndLightIntensity() {
    new TWEEN.Tween(this.mesh.scale)
    .onUpdate(function() {
      this.pointLight.intensity -= 0.006
    }.bind(this))
    .onComplete(function() {
        this.pointLight.intensity = this.emissiveIntensity
        this.mesh.scale.set(1, 1, 1)
    }.bind(this))
    .to(this.targetScale, this.animationDuration).start();
  }
}

export default FireCube
