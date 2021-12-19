Feature: 
  Cada nivel tiene 2 posibles encuentros:
  hallar un tesoro o realizar una batalla 
  con alguno de los 5 jefes.

  # Encuentro con un tesoro
  Scenario: El jugador inicia el juego
    Given un encuentro aleatorio
    When el resultado sea tesoro
    Then debe aparecer un cofre de tesoro