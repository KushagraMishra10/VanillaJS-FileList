let sampleData = {
  metaData: { columns: ["Name", "Size", "LastModified"], filesPerPage: 25 },
  files: [
    {
      id: "116",
      Name: "puzzling.bmp",
      Size: "64000",
      LastModified: "01/22/2020 08:29:36 AM",
      Description: "Some text here"
    },
    {
      id: "116",
      Name: "abcd.bmp",
      Size: "64000",
      LastModified: "01/22/2020 08:29:36 AM",
      Description: "Some text here"
    }
  ]
};

let columns = sampleData.metaData.columns;
let rows = sampleData.files;
let sortOrder = 1;
let width = 100 / sampleData.metaData.columns.length + "%";

function renderColumn(column, idx) {
  let elem = document.createElement("div");
  elem.classList.add("display-inline");
  elem.style.width = width;
  elem.innerHTML = column;
  return elem;
}
function renderRow(row, key) {
  let elem = document.createElement("div");
  elem.classList.add("display-inline");
  elem.style.width = width;
  if (key.toLowerCase() === "size") {
    row[key] = formatFileSize(row[key], "mb");
  }
  if (key.toLowerCase() === "lastmodified") {
    row[key] = formatModifiedOn(row[key]);
  }
  elem.innerHTML = row[key];
  return elem;
}

function renderColumns() {
  columns.map((column, index) => {
    if (column.toLowerCase() === "name") {
      renderColumn(column, index).addEventListener("click", sort);
    }
    document.getElementById("headers").appendChild(renderColumn(column, index));
  });
}

function renderRows(currentRows) {
  currentRows.map(row => {
    columns.map(column => {
      document.getElementById("rows").appendChild(renderRow(row, column));
    });
  });
}

function renderTable(currentRows) {
  renderColumns();
  renderRows(currentRows);
}

function search(evt) {
  document.getElementById("rows").innerHTML = "";
  if (evt.currentTarget.value) {
    currentRows = rows.filter(row =>
      row["Name"].startsWith(evt.currentTarget.value)
    );
    renderRows(currentRows);
  } else {
    renderRows(rows);
  }
}

function sort() {
  document.getElementById("rows").innerHTML = "";
  sortOrder = sort * -1;
  if (sortOrder) {
    rows.sort(function(a, b) {
      return (a[Name].toLowerCase() = b[Name].toLowerCase()) * sortOrder;
    });
  }
  renderRows(currentRows);
}

window.onload = function() {
  renderTable(rows);
  document.getElementById("search").addEventListener("keyup", search);
  //   getFiles().then(res => {
  //     renderRow(res.files);
  //   });
};
