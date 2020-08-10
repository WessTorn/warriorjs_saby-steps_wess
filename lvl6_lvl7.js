// level 6
let direction = false
class Player {
  playTurn(warrior) { 
    if (direction == true) {
      if (warrior.feel().isEmpty()) {
        if (warrior.health() === warrior.maxHealth()) {
          warrior.walk()
        } else if (this.health > warrior.health() && warrior.health() < 10) {
          warrior.walk('backward')
        } else if (this.health > warrior.health()) {
          warrior.walk()
        } else {
          warrior.rest()
        }
      } else if (warrior.feel().isWall()) {
        warrior.walk('backward')
        direction = false
      } else if (warrior.feel().getUnit().isBound()) {
        warrior.rescue()
      } else {
        warrior.attack()
      }
    } else {
      if (warrior.feel('backward').isEmpty()) {
        if (warrior.health() === warrior.maxHealth()) {
          warrior.walk('backward')
        } else if (this.health > warrior.health() && warrior.health() < 10) {
          warrior.walk()
        } else if (this.health > warrior.health()) {
          warrior.walk('backward')
        } else {
          warrior.rest()
        }
      } else if (warrior.feel('backward').isWall()) {
        warrior.walk()
        direction = true
      } else {
        warrior.rescue('backward')
      }
    }
    
    this.health = warrior.health();
  }
}

// level 7
class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() === warrior.maxHealth()) {
        warrior.walk()
      } else if (this.health > warrior.health() && warrior.health() < 10) {
        warrior.walk('backward')
      } else if (this.health > warrior.health()) {
        warrior.walk()
      } else {
        warrior.rest()
      }
    } else if (warrior.feel().isWall()) {
      warrior.pivot()
    } else if (warrior.feel().getUnit().isBound()) {
      warrior.rescue()
    } else {
      warrior.attack()
    }
    
    this.health = warrior.health();
  }
}
