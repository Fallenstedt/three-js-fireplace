import * as THREE from 'three'
import Fire from './fire';
import CONFIG from './config.js'

class FirePlace {
  constructor() {
    this.group = new THREE.Group();
    this.fire = new Fire().group;

    this.buildFirePlace();
  }

  buildFirePlace() {
    let bottom = this.buildBlock(CONFIG.length, CONFIG.width, 1);
    let leftWall = this.buildBlock(CONFIG.length, CONFIG.width, 0.5);
    let rightWall = this.buildBlock(CONFIG.length, CONFIG.width, 0.5);
    let chimeny = this.buildBlock(5, 5, 10)

    rightWall.rotation.y = -90 * (Math.PI / 180)
    rightWall.position.set(2.25, 0, 2.5)

    leftWall.rotation.x = 90 * (Math.PI / 180)
    leftWall.position.set(0, 2.25, 2.5)

    chimeny.position.set(0, 0, 10)

    this.fire.position.set(0, 0, -0.1)
    this.group.add(this.fire)

    this.group.add(leftWall)
    this.group.add(rightWall)
    this.group.add(bottom)
    this.group.add(chimeny)
  }

  buildBlock(x, y, z) {
    let geom = new THREE.BoxGeometry(x, y, z)
    let mat = new THREE.MeshLambertMaterial({
      color: 0x151515,
      emissive: 0x151515,
      emissiveIntensity: 1.2,
    })
    let mesh = new THREE.Mesh(geom, mat)
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  }
}

export default FirePlace
