import Chunk from '../chunk/Chunk';
import { gen_flat_chunk } from '../../utils/chunk/ChunkUtils';
import type Server from '../../Server';
import type Vector3 from '../../math/Vector3';

export default class Flat {
    public getChunk({
        pos,
        seed,
        server
    }: {
        pos: Vector3;
        seed: number;
        server: Server;
    }) {
        const chunk = new Chunk(pos.getX(), pos.getZ());
        const bedrock = server.getBlockManager().getBlock('minecraft:bedrock');
        const dirt = server.getBlockManager().getBlock('minecraft:dirt');
        const grass = server.getBlockManager().getBlock('minecraft:grass');

        gen_flat_chunk().forEach((block: any) => {
            const blk = block.name === "minecraft:grass"
                ? grass : block.name === "minecraft:dirt"
                    ? dirt : bedrock;
            chunk.setBlock(block.x, block.y, block.z, blk);
        });

        return chunk;
    }
}
