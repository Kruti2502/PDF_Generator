import React from "react";
import Datatable from "@kruti2502/custom-react-datatable";
import rows from "../data.json";
import "./ListOfPdfs.css";

interface ColumnType {
  key: keyof (typeof rows)[0];
  label: string;
  minWidth?: string;
  onClick?: (row: any, column: any) => void;
  styles?: object;
}

interface RowType {
  id: number;
  title: string;
  link: string;
}

const onclick = (row: RowType, column: ColumnType) => {
  const url = `http://localhost:3000/pdfs/${row[column.key]}`;
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", fileName!);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const styles = {
  color: "blue",
  cursor: "pointer",
};

const columns: ColumnType[] = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "link", label: "Link", onClick: onclick, styles: styles },
];

function ListOfPdfs() {
  return (
    <div className="table_container">
      <Datatable {...{ columns, rows }} sortable draggable showGridLines />
    </div>
  );
}

export default ListOfPdfs;
