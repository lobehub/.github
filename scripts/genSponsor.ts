import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { genSponsor } from "@lobehub/readme-wizard";
import { consola } from "consola";

const gen = async (themeMode: "light" | "dark") => {
  consola.start(`Generating sponsor-${themeMode}.png`);
  try {
    const res = await genSponsor({ themeMode });
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    writeFileSync(
      resolve(__dirname, "../static", `sponsor-${themeMode}.png`),
      buffer,
    );
    consola.success(`sponsor-${themeMode}.png generated`);
  } catch (error) {
    consola.error(error);
  }
};

gen("light");
gen("dark");
