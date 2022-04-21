import { recordsDB } from '../DDBB/RecordsDB.js';

window.onload = function(){
    getPlayerRecords();
}

function getPlayerRecords() {
    let filterRecords = recordsDB.sort(function(a, b) {
        return b.score - a.score;
    })

    let cad='<tr><th>Name</th><th>Score</th></tr>'
    for (let player of filterRecords){
        cad+=`<tr>
            <td>${player.name}</td>
            <td>${player.score}</td>
            </tr>`
    }
        document.getElementById("tblRecords").innerHTML=cad
}