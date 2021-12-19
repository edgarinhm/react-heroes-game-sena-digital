Feature: cofre de tesoro un permite encuentrar 
  un ítem o nada

  # Encuentro un cofre de tesoro
  Scenario: El jugador inicia el juego y encuentra un cofre dde tesoro
    Given un cofre de tesoro
    When el resultado sea item
    Then muestra y recibe un item

    # Encuentro un cofre de tesoro
  Scenario: El jugador inicia el juego y encuentra un cofre dde tesoro
    Given un cofre de tesoro
    When el resultado sea nada
    Then muestra nada