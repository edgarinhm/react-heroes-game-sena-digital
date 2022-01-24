import { CharacterModel, GameObjectModel } from '@/domain/models';
import { Character } from '@/domain/usecases';

/**
 *
 *
 * @export
 * @class IvyCharacter
 * @implements {Character}
 */
export class IvyCharacter implements Character {
  constructor(public properties: Character.Model, private gameConfig: Character.GameObject) {
    /*
      - Ivy puede ser eliminada si se usa un espejo en su contra.
      - Se obtiene +5 en estilo si ivy es eliminado.
      - Si se usa un espejo, recuerda actualizar el inventario.
      - Si no se tiene un espejo, ivy atacara, lo cual disminuira el estilo en -10
      - Si ivy ataca y el estilo es igual o menor a 0, restar -2 en todos los atributos restantes
      Imprimir cada accion en la consola:
      - Si ivy ataca. 
      - Si ivy fue eliminada usando espejo.
      - Cantidad de espejos restantes
      
      La función retorna un game object actualizado (stats e inventario)
    */
  }

  /**
   * - Si el valor de fuerza del héroe es menor o igual 5:
   *    80% probabilidad de sumar 1 estaca,
   *    20% de no obtener nada.
   * - La condicion es inversa si fuerza es mayor a 5
   * @param gameConfig
   * @param heroe
   * @returns
   */
  getItem(gameConfig: GameObjectModel, heroe: CharacterModel): Promise<GameObjectModel> {
    const probability = this.calculateProbability();
    let isNewStake = false;
    if ((heroe.force <= 5 && probability === 0.8) || (heroe.force > 5 && probability === 0.2)) {
      isNewStake = true;
      this.gameConfig = { ...gameConfig };
    }
    return new Promise<GameObjectModel>((resolve, reject) => {
      if (isNewStake) {
        resolve(this.gameConfig);
      } else {
        reject(this.gameConfig);
      }
    });
  }

  attack(gameConfig: GameObjectModel): Promise<GameObjectModel> {
    this.gameConfig = { ...gameConfig };
    return new Promise<GameObjectModel>((resolve, reject) => {
      resolve(this.gameConfig);
      reject(this.gameConfig);
    });
  }

  /**
   * ¿Como calcular la probabilidad?
   * - Generar un número random entre 1 y 10
   * - El 80% de probabilidad se considera cierto si el número random es mayor a 2.
   * - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
   * @returns number
   */
  calculateProbability(): number {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber > 2 ? 0.8 : 0.2;
  }
}

export namespace IvyCharacter {
  export type Model = Character.Model;
}
