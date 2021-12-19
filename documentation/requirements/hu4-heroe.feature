Feature: Un Heroe tiene 4 atributos, cuyas estadísticas son 
  Carisma, Fuerza, Inteligencia, Estilo

  # Inicia el juego
  Scenario: El jugador inicia el juego presiona jugar
    Given un heroe
    When encuentra un jefe y deside usar item
    Then permite usar un item

  # Uso de item contra un jefe
  Scenario: El jugador utiliza un item
    Given uso de item
    When el item permite derrotar al jefe
    Then derrota al jefe y sube de nivel
  
  # Uso de item contra un jefe
  Scenario: El jugador utiliza un item
    Given uso de item
    When el item no permite derrotar al jefe
    Then resta fuerza del heroe