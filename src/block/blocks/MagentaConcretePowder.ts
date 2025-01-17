import WhiteConcretePowder, {
    ConcretePowderColorType
} from './WhiteConcretePowder';

export default class MagentaConcrete extends WhiteConcretePowder {
    constructor() {
        super(
            'minecraft:magenta_concrete_powder',
            ConcretePowderColorType.Magenta
        );
    }
}
