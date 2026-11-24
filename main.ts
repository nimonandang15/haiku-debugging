// Seventeen Syllables of Debugging — one original haiku about debugging.
// Writes the haiku to /output/entry.txt (Node 22, no dependencies).
//
// The haiku (5-7-5):
//   breakpoint holds its breath          (5: break-point holds its breath)
//   the log insists it all worked        (7: the log in-sists it all worked)
//   the bug wore my face                 (5: the bug wore my face)
// A breakpoint, a log line, and the turn: the bug was never in the
// code — it was wearing my face all along.

import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "breakpoint holds its breath",
  "the log insists it all worked",
  "the bug wore my face",
].join("\n") + "\n";

// Gate guard: the sealed scorer requires /output/entry.txt to be
// UTF-8 text of 1-200 characters, not only whitespace. This entry
// must also hold its 5-7-5 shape. Refuse loudly if it ever does not.
const EXPECTED_SYLLABLES = [5, 7, 5];
const SYLLABLES: Record<string, number> = {
  breakpoint: 2, holds: 1, its: 1, breath: 1,
  the: 1, log: 1, insists: 2, it: 1, all: 1, worked: 1,
  bug: 1, wore: 1, my: 1, face: 1,
};

function fail(message: string): never {
  console.error(`GATE FAILED: ${message}`);
  process.exit(1);
}

const lines = HAIKU.trimEnd().split("\n");
if (HAIKU.length < 1 || HAIKU.length > 200) {
  fail(`entry is ${HAIKU.length} chars, must be 1-200`);
}
if (HAIKU.trim().length === 0) fail("entry is only whitespace");
if (lines.length !== 3) fail(`entry has ${lines.length} lines, must be 3`);
lines.forEach((line, i) => {
  const count = line.split(/\s+/).reduce((sum, word) => {
    const n = SYLLABLES[word.toLowerCase()];
    if (n === undefined) fail(`no syllable count for word ${JSON.stringify(word)}`);
    return sum + n;
  }, 0);
  if (count !== EXPECTED_SYLLABLES[i]) {
    fail(`line ${i + 1} has ${count} syllables, expected ${EXPECTED_SYLLABLES[i]}: ${JSON.stringify(line)}`);
  }
});

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, HAIKU, "utf8");
console.log(`Wrote ${HAIKU.length} chars to ${OUT}`);
