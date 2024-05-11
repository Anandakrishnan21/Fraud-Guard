import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req, res) {
  try {
    const scriptFileName = "z.py";
    const documentsPath = path.join(process.env.USERPROFILE, "Documents");
    const scriptPath = path.join(documentsPath, scriptFileName);

    if (!fs.existsSync(scriptPath)) {
      console.error(`Python script not found at: ${scriptPath}`);
      return res.status(404).json({ error: "Python script not found" });
    }

    const pythonProcess = spawn("python", [scriptPath]);
    let output = "";

    pythonProcess.stdout.on("data", (data) => {
      console.log(`Python program output: ${data}`);
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Error executing Python program: ${data}`);
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        console.error(`Python script process exited with code ${code}`);
      }
    });
  } catch (error) {
    console.error("Error executing Python script:", error);
    res.status(500).json({ error: "Error executing Python script" });
  }
}
