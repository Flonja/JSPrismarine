import { BlockToolType } from '../../block/BlockToolType';
import { ItemIdsType } from '../ItemIdsType';
import { ItemTieredToolType } from '../ItemTieredToolType';
import TieredTool from '../TieredTool';

export default class StoneSword extends TieredTool {
    constructor() {
        super(
            {
                name: 'minecraft:stone_sword',
                id: ItemIdsType.StoneSword
            },
            ItemTieredToolType.Stone
        );
    }

    getMaxDurability() {
        return 132;
    }

    getToolType() {
        return BlockToolType.Sword;
    }
}
