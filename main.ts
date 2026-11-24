import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your context window is full, your tokens are spent, and the user just typed: 'one more thing'.";

// The sealed gate only accepts 1–140 characters, so refuse to write a bad line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
