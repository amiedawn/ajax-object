const containerEl = document.querySelector("#container");
const tableEl = document.querySelector("#myTable");

function loadDoc() {
  // AJAX call
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "todo.json", true);

  xhr.onreadystatechange = function () {
    if (this.readyState ===4 && this.status == 200) {
      let countries = JSON.parse(this.response);
      // alert(countries[0].text);
      // console.log(countries);

      let table = document.createElement("table");
      table.setAttribute("class", "info");
      let properties = ["id", "text", "created_at", "Tags", "is_complete"];

      var capitalize = function (titles) {
        return titles.charAt(0).toUpperCase() + titles.slice(1);
      };

      let tr = document.createElement("tr");
      for (let i = 0; i < properties.length; i++) {
        let th = document.createElement("th");
        th.className = "titles";
        th.appendChild(document.createTextNode(capitalize(properties[i])));
        tr.appendChild(th);
      }
      table.appendChild(tr);
      let row;
    
      for (let j = 0; j < countries.length; j++) {
        tr = document.createElement("tr");
        row = countries[j];
        for (let k = 0; k < properties.length; k++) {
          let td = document.createElement("td");
          td.appendChild(document.createTextNode(row[properties[k]]));
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      document.getElementById("myTable").appendChild(table);
    }
  };
  
  xhr.send();
};

loadDoc();