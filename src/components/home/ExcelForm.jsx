"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function ExcelForm() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const bufferArray = e.target.result;
      const wb = XLSX.read(bufferArray, { type: "buffer" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setItems(data);
    };
    fileReader.readAsArrayBuffer(file);
  };

  const writeExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(items);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Extended.xlsx");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8 w-40 bg-neutral-50 text-black hover:bg-neutral-300">
          Export to Excel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div>
            <Input
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
