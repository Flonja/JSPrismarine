import StainedGlass, { StainedGlassType } from './WhiteStainedGlass';

export default class LimeStainedGlass extends StainedGlass {
    constructor() {
        super('minecraft:lime_stained_glass', StainedGlassType.Lime);
    }
}
