import WhiteWool, { WoolColorType } from './WhiteWool';

export default class BlackWool extends WhiteWool {
    constructor() {
        super('minecraft:black_wool', WoolColorType.Black);
    }
}
