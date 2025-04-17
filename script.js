function insert_Row(){
	let table=document.getElementById("sampleTable");
	let newRow=table.insertRow(0);
	let newCell0=newRow.insertCell(0);
	let newCell1=newRow.insertCell(1);
	newCell0.textContent="New Cell1";
	newCell1.textContent="New Cell2";
}

// let count=0;
// function insert_Row() {
//     //Write your code here
//   let table=document.querySelector("#sampleTable");
//   let btn=document.querySelector("input");

//   for (let i = 0; i < 1; i++) {
//     const tr = document.createElement("tr");
// 	count++;
//     for (let j = 1; j <= 2; j++) {
//       const td = document.createElement("td");
//       td.textContent = `New cell${j}`;
//       tr.append(td);
//     }
//     table.prepend(tr);
//   }

	// let tr=document.createElement("tr");
	// let td1=document.createElement("td");
	// td1.innerText="New Cell1"
	// let td2=document.createElement("td");
	// td2.innerText="New Cell2"
	// tr.append(td1,td2)
	// table.prepend(tr)
	
  
}
