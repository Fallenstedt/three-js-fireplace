import * as THREE from 'three'
import FireCube from './fireCube.js'
import FireStream from './fireStream.js'
import TWEEN from 'tween.js'

class FirePlace {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.cube = new FireStream();

    this.time;
    this.prevTime
    this.delta;
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;

    console.log(this.cube.group);
    this.scene.add(this.cube.group)

    this.animate()
  }

  animate() {
    this.time = performance.now();
    this.delta = (this.time - this.prevTime) / 1000;

    requestAnimationFrame(this.animate.bind(this));
    TWEEN.update(this.time)
    this.renderer.render(this.scene, this.camera)

    this.prevTime = this.time
  }

}

export default FirePlace
