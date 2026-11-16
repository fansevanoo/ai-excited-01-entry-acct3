import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || './out';

await mkdir(outputDirectory, { recursive: true });
await copyFile(source, join(outputDirectory, 'entry.png'));
