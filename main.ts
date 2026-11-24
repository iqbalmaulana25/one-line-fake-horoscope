// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes one fake horoscope (200 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "GPT family: the stars promise a week of 'continue', 'continue', 'continue'. Your lucky number is 429; your unlucky one is the token count of the PDF arriving Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
