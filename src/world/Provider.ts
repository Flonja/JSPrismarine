import Chunk from './chunk/Chunk';
import Generator from './Generator';
import SharedSeedRandom from './util/SharedSeedRandom';

export default interface Provider {
    /**
     * Returns the path to the world folder.
     */
    getPath(): string;
    
    /**
     * Returns the chunk decoded from the provider.
     * @param cx - chunk x
     * @param cz - chunk z
     * @param seed - world seed
     * @param generator - chunk generator
     */
    readChunk(cx: number, cz: number, seed: SharedSeedRandom, generator: Generator): Chunk;
}