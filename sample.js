function loadPresidents() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var data = this.responseText;
      var jsonResponse = JSON.parse(data);
      console.log(jsonResponse["presidents"]);
      var table = document.createElement('table');
      table.setAttribute('class', 'history');
      var properties = ['number', 'name', 'date', 'took_office', 'left_office']; // changed this
      var capitalize = function(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      }
      var tr = document.createElement('tr');
      for (var i = 0; i < properties.length; i++) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(capitalize(properties[i])));
        tr.appendChild(th);
      }
      table.appendChild(tr);
      var tr, row;
      console.log("jsonResponse", jsonResponse); // changed this
      for (var r = 0; r < jsonResponse["presidents"].president.length; r++) { // changed this
        tr = document.createElement('tr');
        row = jsonResponse["presidents"].president[r]; // changed this
        for (var i = 0; i < properties.length; i++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(row[properties[i]]));
            tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      document.getElementById('presidentialTable').appendChild(table);
    }
  };
  xhr.open("GET", "http://schwartzcomputer.com/ICT4570/Resources/USPresidents.json", true);
  xhr.send();
};        