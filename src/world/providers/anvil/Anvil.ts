import BaseProvider from '../../BaseProvider';
import Chunk from '../../chunk/Chunk';
import Generator from '../../Generator';
import Region from './Region';
import SharedSeedRandom from '../../util/SharedSeedRandom';
import fs from 'fs';
import path from 'path';

export default class Anvil extends BaseProvider {
    private regionsPath: string;
    private cachedRegions: Map<string, Region> = new Map();

    public constructor(folderPath: string) {
        super(folderPath);
        this.regionsPath = path.join(this.getPath(), 'region');
    }

    public async readChunk(
        cx: number,
        cz: number,
        _seed: SharedSeedRandom,
        _generator: Generator
    ): Promise<Chunk> {
        const [rx, rz] = [cx >> 5, cz >> 5];
        const id = `r.${rx}.${rz}.mca`;
        if (!this.cachedRegions.has(id)) {
            // https://minecraft.gamepedia.com/Region_file_format
            const region = new Region(
                await fs.promises.readFile(path.join(this.regionsPath, id))
            );
            this.cachedRegions.set(id, region);
        }
        return new Chunk(cx, cz);
    }
}
