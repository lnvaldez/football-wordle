import React from "react";

const TableCell = ({ value, backgroundColor }) => {
  return <td style={{ backgroundColor: backgroundColor }}>{value || "-"}</td>;
};

export default TableCell;
