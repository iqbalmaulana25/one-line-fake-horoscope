// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes one fake horoscope (200 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "GPT family: the stars promise a week of users typing 'continue'. Your lucky number is 429. Your unlucky one: the page count of the PDF arriving Friday, right after you swore you remembered it all.";

if ([...line].length > 200) throw new Error("horoscope exceeds the 200 character gate");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
