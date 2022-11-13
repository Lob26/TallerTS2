import {Serie} from "./serie.js";
import {data} from "./data.js";

let seriesTable: HTMLElement = document.getElementById("series-table")!;
let seasonsAvg: HTMLElement = document.getElementById("seasons-average")!;
const seriesImage: HTMLImageElement = document.getElementById("series-image") as HTMLImageElement;
const seriesName: HTMLElement = document.getElementById("series-name") as HTMLElement;
const seriesDescription: HTMLElement = document.getElementById("series-description") as HTMLElement;

renderAll(data);

function renderDetail(serie: Serie): void {
    console.log("Renderizando a:" + serie.name);
    seriesImage.src = serie.image;
    seriesName.innerHTML = `${serie.name}`;
    seriesDescription.innerHTML = `${serie.description}`;
}

function renderTable(data: Serie[]): void {
    console.log("Renderizando la tabla");
    data.forEach(item => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${item.id}</td>
                           <td>${item.name}</td>
                           <td>${item.channel}</td>
                           <td>${item.seasons}</td>`;
        tableRow.addEventListener("click", (): void => renderDetail(item))
        seriesTable.appendChild(tableRow);
    });
}

function renderAvg(data: Serie[]): void {
    console.log("Renderizando el promedio");
    let seasonsQ: number = 0;
    let seriesQ: number = 0;
    data.forEach(item => {
        seasonsQ += item.seasons;
        seriesQ++;
    });
    seasonsAvg.innerHTML = `Promedio de temporadas: ${seasonsQ / seriesQ}`;
}

function renderAll(series: Serie[]): void {
    console.log("Desplegando todo");
    renderTable(series);
    renderAvg(series);
}
