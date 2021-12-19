Feature: Un ítem permite derrotar a los jefes, con excepcion de Ornstein
  pero si tiene muy mala suerte, 
  puede encontrar el cofre vacío.

  # Encuentro con un tesoro y sale un item
  Scenario: El jugador inicia el juego
    Given un item aleatorio
    When el resultado sea una linterna
    Then el item que derrota a Baron Veigar

  # Encuentro con un tesoro y sale un item
  Scenario: El jugador inicia el juego
    Given un item aleatorio
    When el resultado sea una ECTO-1
    Then el item que derrota a Zombie errante

  # Encuentro con un tesoro y sale un item
  Scenario: El jugador inicia el juego
    Given un item aleatorio
    When el resultado sea una granada extintora
    Then el item que derrota a Shinra

  # Encuentro con un tesoro y sale un item
  Scenario: El jugador inicia el juego
    Given un item aleatorio
    When el resultado sea un espejo
    Then el item que derrota a Ivy

  # Encuentro con un tesoro y sale un item
  Scenario: El jugador inicia el juego
    Given un item aleatorio
    When el resultado sea un esquivar y el jefe sea Ornstein
    Then avanzan de nivel