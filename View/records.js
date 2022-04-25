var recordsArray = [];

window.onload = function(){
    getRecordsArray();
}

function getRecordsArray(){
    let controlFlag = true;
    let i = 0;
    let recordKeyIndex;
    while (controlFlag){
        if (localStorage.key(i) != null) {
            recordKeyIndex = localStorage.key(i);
            recordsArray.push(JSON.parse(localStorage.getItem(recordKeyIndex)));
            i++;
        } else {
            controlFlag = false;
        }
    }
    sortPlayerRecords();
}

function sortPlayerRecords() {
    let filterRecords = recordsArray.sort(function(a, b) {
        return b.score - a.score;
    })

    console.log(filterRecords);

    let cad='<tr><th>Name</th><th>Score</th></tr>'
    for (let player of filterRecords){
         cad+=`<tr>
             <td>${player.name}</td>
             <td>${player.score}</td>
             </tr>`
    }
         document.getElementById("tblRecords").innerHTML=cad
}