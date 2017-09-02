import * as THREE from 'three'
import CONFIG from './config.js'
import FireFloor from './fireFloor.js';
import FirePlace from './firePlace.js'
import TWEEN from 'tween.js';

const frustumSize = 20,
aspect = window.innerWidth / window.innerHeight;

class Scene {
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
    this.firePit = new FirePlace();
    this.floor = new FireFloor();
    this.axisHelper = new THREE.AxisHelper(10)

    this.time;
    this.prevTime
    this.delta;
  }

  buildDebugBox() {
    var geom = new THREE.BoxGeometry(2, 2, 2)
    var mat = new THREE.MeshLambertMaterial({color: 0xf94381})
    var mesh = new THREE.Mesh(geom, mat)
    mesh.castShadow = true;
    return mesh
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.camera.position.set(0, -10, 5)

    this.camera.lookAt(this.scene.position)
    this.scene.rotation.z = 45 * (Math.PI / 180)

    this.scene.add(this.firePit.group)
    this.scene.add(this.floor.mesh)
    if (CONFIG.isDebug === true) {
      this.scene.add(this.axisHelper)
    }

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

export default Scene
