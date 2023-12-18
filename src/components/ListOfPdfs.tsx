import React, { ReactNode } from "react";
import Datatable from "@kruti2502/custom-react-datatable";

interface ColumnType {
  key: keyof (typeof rows)[0];
  label: string;
  minWidth?: string;
}

interface RowType {
  id: number;
  title: string;
  link: string;
}

const rows: RowType[] = [
  {
    id: 1,
    title: "",
    link: "",
  },
  // {
  //   id: 2,
  //   first_name: "Bondon",
  //   last_name: "Reasce",
  // },
  // {
  //   id: 3,
  //   first_name: "Davin",
  //   last_name: "Towlson",
  // },
  // {
  //   id: 4,
  //   first_name: "Barnebas",
  //   last_name: "Ferraraccio",
  // },
];

const columns: ColumnType[] = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title", minWidth: "500" },
  { key: "link", label: "Link" },
];

function ListOfPdfs() {
  return (
    <Datatable
      {...{ columns, rows }}
      sortable
      paginator
      noOfRowsPerPage={8}
      resizableColumns
      draggable
      filterable
      defaultCheckedCols={["id"]}
      maxHeight={"1000"}
      headerColor={"#3cb371"}
      evenRowColor={"rgb(250, 250, 250)"}
      oddRowColor={"rgb(240, 240, 240)"}
      showGridLines
    />
  );
}

export default ListOfPdfs;
