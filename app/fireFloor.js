import * as THREE from 'three'

class FireFloor {
  constructor() {
    this.geometry = new THREE.PlaneGeometry(20, 20, 10, 10)
    this.material = new THREE.MeshLambertMaterial({color: 0xfff000, side: THREE.DoubleSide})
    this.mesh = new THREE.Mesh( this.geometry, this.material )
  }
}

export default FireFloor
