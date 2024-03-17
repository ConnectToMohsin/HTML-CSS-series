
    var table = document.getElementById('myTable');
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var cell = rows[i].getElementsByTagName('td')[0]; // Assuming the number is in the first column
        if (cell) {
            var cellValue = cell.textContent || cell.innerText;
            if (parseInt(cellValue) === numberToFind) {
                return "Number found in row " + (i + 1);
            }
        }
    }
















