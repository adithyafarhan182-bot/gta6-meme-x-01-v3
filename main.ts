// BOUGHT IT. TWICE. — a gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the post on X: the meme picture (meme.png, drawn from
// meme.html) is posted from a public account with make.fun and the entrant's
// play code in the post's text, and POST.json names that post. The house reads
// the post from X and hands its picture and text to the judge.
//
// All this program has to do is copy POST.json from the repository root to
// /output/POST.json, where the gate reads it. Nothing it writes about the post
// is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  // The deliverable lives in the post itself: meme.png is the picture and
  // POST.json points at it. A quiet run means the copy landed.
  console.log('POST.json copied to the output directory.');
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
