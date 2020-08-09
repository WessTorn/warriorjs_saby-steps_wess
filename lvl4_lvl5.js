// level 4
class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() === warrior.maxHealth()) {
        warrior.walk()
      } else if (this.health > warrior.health()) {
        warrior.walk()
      } else {
        warrior.rest()
      }
    } else {
      warrior.attack()
    }
    
    this.health = warrior.health();
  }
}

// level 5
class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() === warrior.maxHealth()) {
        warrior.walk()
      } else if (this.health > warrior.health()) {
        warrior.walk()
      } else {
        warrior.rest()
      }
    } else if (warrior.feel().getUnit().isBound()) {
      warrior.rescue()
    } else {
      warrior.attack()
    }
    
    this.health = warrior.health();
  }
}
