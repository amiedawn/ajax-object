$.ajax({
  url: "todo.json",
  dataType: "json",
  success: function (countries) {
    for (var i = 0; i < countries.length; i++) {
      var row = $(
        "<tr><td>" +
          countries[i].id +
          "</td><td>" +
          countries[i].text +
          "</td><td>" +
          countries[i].created_at +
          "</td><td>" +
          countries[i].Tags +
          "</td><td>" +
          countries[i].is_complete +
          "</td></tr>"
      );
      $("#myTable").append(row);
    }
  },
  error: function (jqXHR, textStatus, errorThrown) {
    alert("Error: " + textStatus + " - " + errorThrown);
  },
});
