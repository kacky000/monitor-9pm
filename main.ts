import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two sentences: a reassuring picture, then the fact that makes it impossible.
const story =
  "The baby monitor shows her asleep in the crib, chest rising and falling, the way it has all night. The app has just sent a notification that the camera lost power at 9 p.m.";

const limit = 400;
if ([...story].length > limit) throw new Error(`story is ${[...story].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), story);
