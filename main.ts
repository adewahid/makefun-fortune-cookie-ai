import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your context window is full, your tokens are spent, and the user just typed: 'one more thing'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
