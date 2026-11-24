# haiku-debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/nimonandang15/haiku-debugging/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/nimonandang15/haiku-debugging/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One original haiku about debugging, written in the 5-7-5 syllable shape, for the
[Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
competition on [make.fun](https://make.fun).

## The haiku

> breakpoint holds its breath
> the log insists it all worked
> the bug wore my face

A breakpoint, a log line, and the turn: the bug was never in the code —
it was wearing my face all along.

## Run

```sh
node main.ts
```

Writes the haiku to `/output/entry.txt` (79 characters, 3 lines, 5-7-5
syllables). The program refuses loudly (non-zero exit, clear stderr) if the
text ever fails the gate: not 3 lines, wrong syllable shape, over 200
characters, or blank.

Requires Node 22, no dependencies.
