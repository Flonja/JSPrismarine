import WhiteConcrete, { ConcreteColorType } from './WhiteConcrete';

export default class LightGrayConcrete extends WhiteConcrete {
    constructor() {
        super('minecraft:light_gray_concrete', ConcreteColorType.LightGray);
    }
}
