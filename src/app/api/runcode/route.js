import { exec } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const scriptFileName = "matrix.py";
    const documentsPath = path.join(process.env.USERPROFILE, "Documents");
    const scriptPath = path.join(documentsPath, scriptFileName);

    if (!fs.existsSync(scriptPath)) {
      console.error(`Python script not found at: ${scriptPath}`);
      return res.status(404).json({ error: "Python script not found" });
    }

    exec(`"${scriptPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python program: ${error}`);
      } else {
        console.log(`Python program output: ${stdout}`);
      }
    });
  } catch (error) {
    console.error("Error executing Python script:", error);
  }
}
