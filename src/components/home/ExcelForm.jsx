"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function ExcelForm() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {
          type: "buffer",
        });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        console.log(data);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
    });
  };

  const writeExcel = () => {
    let wb;
    try {
      const existingWorkbook = XLSX.readFile("Extended.xlsx");
      wb = existingWorkbook;
    } catch (error) {
      wb = XLSX.utils.book_new();
    }
    const ws = XLSX.utils.json_to_sheet(items);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Extended.xlsx");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8 w-40 bg-neutral-50 text-black hover:bg-neutral-300">
          Export to excel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter the Data</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Input type="email" placeholder="Email Address" />
          </div>
          <div>
            <Input type="number" placeholder="Number" />
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={writeExcel}
            className="w-full h-8 bg-blue-900 hover:bg-blue-800 duration-300"
          >
            File Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
