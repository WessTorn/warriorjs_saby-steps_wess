// level 1
class Player {
  playTurn(warrior) {
    warrior.walk()
  }
}

// level 2
class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      warrior.walk()
    } else {
      warrior.attack()
    }
  }
}

// level 3
class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() !== warrior.maxHealth()) {
        warrior.rest()
      } else {
        warrior.walk()
      }
    } else {
      warrior.attack()
    }
  }
}
