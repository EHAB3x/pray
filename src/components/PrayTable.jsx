import React, { useEffect, useState } from "react";
import './component_css/PrayTable.css'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import axios from "axios";



export default function PrayTable() {
    const [prayTime , setPrayTime]= useState("");
    const day = new Date().getDate();
    useEffect(()=>{
        axios.get("https://api.aladhan.com/v1/calendarByAddress/2023/9?address=Egyptian%20General%20Authority%20of%20Survey&method=1")
        .then(time => setPrayTime(time.data.data[day - 1].timings));
    },[])
const rows = [
  {
    key: "1",
    name: "Fajr",
    time: prayTime.Fajr,
    sunnah: "2 - 0",
  },
  {
    key: "2",
    name: "Dhuhr",
    time: prayTime.Dhuhr,
    sunnah: `2,2 - 0`,
  },
  {
    key: "3",
    name: "Asr",
    time: prayTime.Asr,
    sunnah: "None",
  },
  {
    key: "4",
    name: "Maghrib",
    time: prayTime.Maghrib,
    sunnah: "0 - 2",
  },
  {
    key: "5",
    name: "Isha",
    time: prayTime.Isha,
    sunnah: "0 - 2",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "time",
    label: "Time",
  },
  {
    key: "sunnah",
    label: "Sunnah",
  },
];
  return (
    <Table 
        className="pray-table text-center"
      aria-label="Controlled table example with dynamic content"
      selectionMode="multiple"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
