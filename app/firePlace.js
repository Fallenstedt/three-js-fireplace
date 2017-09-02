import * as THREE from 'three'
import FireStream from './fireStream'

class Fire {
  constructor() {
    this.group = new THREE.Group();

    this.buildFirePlace();
  }

  buildFirePlace() {
    var streams = []
    for (var i = 0; i < 5; i++) {
      streams.push(new FireStream().group)
    }
    streams.forEach(function(stream) {
      this.group.add(stream)
    }.bind(this))
  }
}

export default Fire
