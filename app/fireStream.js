import FireCube from './fireCube';
import { getRandomArbitrary } from './util'
import * as THREE from 'three'

class FireStream {
  constructor() {
    this.group = new THREE.Group();
    this.buildCubes()

  }

  buildCubes() {

    var cubes = []
    for (var i = 0; i < 10; i++) {
      cubes.push(new FireCube().mesh)
    }
    cubes.forEach(function(cube) {
      this.group.add(cube)
    }.bind(this))
  }

}


export default FireStream
