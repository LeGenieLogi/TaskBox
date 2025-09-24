 let Resultat 

function  DesactiverBoutonAdd(){
 document.getElementById("Add").style.display = 'none'

}
function  DesactiverBoutonUpdate(){
    document.getElementById("Update").style.display = 'none'
}
function DesactiverBoutonFinish(){
    document.getElementById("Finish").style.display = 'none'

}
function DesactiverBoutonDelete(){
    document.getElementById("Delete").style.display = 'none'
}
function DesactiverBoutonClear(){
    document.getElementById("Clear").style.display = 'none'
}
function Desactiver(){
DesactiverBoutonAdd()
DesactiverBoutonClear()
DesactiverBoutonDelete()
DesactiverBoutonFinish()
DesactiverBoutonUpdate()
}
Desactiver()

let verifier = true 

function ActiverBouton(){
    let ZoneText = document.getElementById("item").value 
    let EndDate =new Date(document.getElementById("end").value)
    let StartDate = new Date(document.getElementById("start").value)
    if(ZoneText !== "" && EndDate > StartDate ){
         document.getElementById("Add").style.display = 'block'
         let CalculerDate = EndDate.getTime() - StartDate.getTime()
         Resultat = CalculerDate
        ConvertirDate()
    }else(
        Desactiver()

    )
}
function  ConvertirDate(){
    let seconde,minute,heure,jour
    seconde = Resultat / 1000 ;
    minute = 0
    heure = 0
    jour = 0
    while( seconde - 60 >= 0){
        minute += 1
        seconde -= 60 
    }
    while(minute - 60 >=  0){
        heure += 1
        minute -= 60

    }
    while(heure - 24 >= 0){
        jour += 1
        heure -= 24
    }
     document.getElementById("Duree").textContent = jour +" j "+ heure + " h " + minute +" min " + seconde + " sec "

}

  let AddTask = [];

  const tableBody = document.getElementById("tableBody");
  
  document.getElementById("Add").addEventListener("click", function() {
    let task = document.getElementById("item").value.trim();
    let StartDate = document.getElementById("start").value;
    let EndDate = document.getElementById("end").value;

    if (!task) {
      alert("Merci de saisir le nom de la tâche.");
      return;
    }
    AddTask.push({
      item: task,
      start: StartDate,
      end: EndDate
    });
    TaskDisplay();

    document.getElementById("item").value = "";
  });

  
  function TaskDisplay() {
    tableBody.innerHTML = ""; 

    AddTask.forEach(function(tache) {
      let row = document.createElement("tr");

      let cellTask = document.createElement("td");
      cellTask.textContent = tache.item;
      row.appendChild(cellTask);

      let cellStart = document.createElement("td");
      cellStart.textContent = tache.start;
      row.appendChild(cellStart);

      let cellEnd = document.createElement("td");
      cellEnd.textContent = tache.end;
      row.appendChild(cellEnd);

      tableBody.appendChild(row);
    });
  }

