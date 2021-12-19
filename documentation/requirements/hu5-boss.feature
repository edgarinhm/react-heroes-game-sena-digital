Feature: Un Jefe cada jefe ataca en particular a un 
  atributo, excepto por Ornstein, 
  que ataca todos los atributos.

  # Inicia el juego
  Scenario: El jugador inicia el juego presiona jugar
    Given un jefe
    When encuentra un jefe y deside usar item
    Then permite usar un item