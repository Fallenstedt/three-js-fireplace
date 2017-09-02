import * as THREE from 'three'
import FireCube from './fireCube.js'
import FireStream from './fireStream.js'
import FireFloor from './fireFloor.js';
import Fire from './firePlace.js';
import TWEEN from 'tween.js';

const frustumSize = 10,
aspect = window.innerWidth / window.innerHeight;

class FirePlace {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      frustumSize * aspect / - 2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / - 2,
      1,
      2000);
    this.renderer = new THREE.WebGLRenderer();
    this.firePlace = new Fire();
    this.light = new THREE.DirectionalLight(0xffffff, 1)
    this.floor = new FireFloor();
    this.axisHelper = new THREE.AxisHelper(10)

    this.time;
    this.prevTime
    this.delta;
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.light.position.y = 10;
    this.light.position.z = 10;
    this.light.position.x = 10;

    this.camera.position.z = 5;
    this.camera.position.y = -10;

    this.camera.lookAt(this.scene.position)
    this.scene.rotation.z = 45 * (Math.PI / 180)

        // this.camera.rotation.y = 45 * Math.PI / 180;
    this.scene.add(this.floor.mesh)
    this.scene.add(this.firePlace.group)
    this.scene.add(this.axisHelper)
    this.scene.add(this.light)

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
