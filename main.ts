import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || './out');
mkdirSync(outputDir, { recursive: true });
// Preserve the artwork bytes exactly in the output.
copyFileSync(resolve('./entry.png'), resolve(outputDir, 'entry.png'));
