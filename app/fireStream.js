import FireCube from './fireCube';
import { getRandomArbitrary } from './util'
import * as THREE from 'three'

class FireStream {
  constructor() {
    this.group = new THREE.Group();

    this.xPosition = getRandomArbitrary(-0.7, 0.7)
    this.yPosition = getRandomArbitrary(-0.7, 0.7)
    this.group.position.set(this.xPosition, this.yPosition, 0)

    this.buildCubes()

  }

  buildCubes() {

    var cubes = []
    for (var i = 0; i < 5; i++) {
      cubes.push(new FireCube().mesh)
    }
    cubes.forEach(function(cube) {
      this.group.add(cube)
    }.bind(this))
  }

}


export default FireStream
