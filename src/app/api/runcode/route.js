import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const scriptFileName = "z.py";
    const documentsPath = path.join(process.env.USERPROFILE, "Documents");
    const scriptPath = path.join(documentsPath, scriptFileName);

    if (!fs.existsSync(scriptPath)) {
      console.error(`Python script not found at: ${scriptPath}`);
      return new NextResponse("Python script not found", { status: 404 });
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

    return new Promise((resolve) => {
      pythonProcess.on("close", (code) => {
        if (code !== 0) {
          console.error(`Python script process exited with code ${code}`);
          resolve(new NextResponse("Python script process exited with error code", { status: 500 }));
        } else {
          resolve(new NextResponse(JSON.stringify({ output }), { status: 200 }));
        }
      });
    });
  } catch (error) {
    console.error("Error executing Python script:", error);
    return new NextResponse("Error executing Python script", { status: 500 });
  }
}
