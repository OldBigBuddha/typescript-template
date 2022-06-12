import sum from "libs/add";

async function main(): Promise<void> {
  console.log("Hello World.");
  console.log(`1 + 1 = ${sum(1, 1)}`);
}

main().catch(console.error);
