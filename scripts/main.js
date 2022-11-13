import { data } from "./data.js";
var seriesTable = document.getElementById("series-table");
var seasonsAvg = document.getElementById("seasons-average");
var seriesImage = document.getElementById("series-image");
var seriesName = document.getElementById("series-name");
var seriesDescription = document.getElementById("series-description");
renderAll(data);
function renderDetail(serie) {
    console.log("Renderizando a:" + serie.name);
    seriesImage.src = serie.image;
    seriesName.innerHTML = "".concat(serie.name);
    seriesDescription.innerHTML = "".concat(serie.description);
}
function renderTable(data) {
    console.log("Renderizando la tabla");
    data.forEach(function (item) {
        var tableRow = document.createElement("tr");
        tableRow.innerHTML = "<td>".concat(item.id, "</td>\n                           <td>").concat(item.name, "</td>\n                           <td>").concat(item.channel, "</td>\n                           <td>").concat(item.seasons, "</td>");
        tableRow.addEventListener("click", function () { return renderDetail(item); });
        seriesTable.appendChild(tableRow);
    });
}
function renderAvg(data) {
    console.log("Renderizando el promedio");
    var seasonsQ = 0;
    var seriesQ = 0;
    data.forEach(function (item) {
        seasonsQ += item.seasons;
        seriesQ++;
    });
    seasonsAvg.innerHTML = "Promedio de temporadas: ".concat(seasonsQ / seriesQ);
}
function renderAll(series) {
    console.log("Desplegando todo");
    renderTable(series);
    renderAvg(series);
}
//# sourceMappingURL=main.js.map