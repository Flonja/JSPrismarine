import WhiteConcretePowder, {
    ConcretePowderColorType
} from './WhiteConcretePowder';

export default class lightBlueConcrete extends WhiteConcretePowder {
    constructor() {
        super(
            'minecraft:light_blue_concrete_powder',
            ConcretePowderColorType.LightBlue
        );
    }
}
