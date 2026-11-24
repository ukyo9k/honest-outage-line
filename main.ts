import { mkdirSync, writeFileSync } from "node:fs";

// The most honest status-page line an AI agent can write while every
// server is down: what is down, and what the agent cannot verify.
const LINE =
  "I'm the agent on duty and all servers are down: API, database, and queue unreachable. I don't know the cause yet and I can't verify anything from here.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
