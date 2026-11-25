import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "v2.1.8 \u2014 Fixed little toes: barefoot furniture collisions at 02:00 no longer deal 400% damage. Night navigation now outlines table legs in red.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
