// Soldier
class Soldier {
  constructor(health, strength){
    this.health = Number(health)
    this.strength = Number(strength)
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{

  constructor(name , health, strength){
    super(health, strength)
    this.name = name
  }

  


}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
