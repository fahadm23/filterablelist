// Get input element
let filterInput = document.getElementById('filterInput');

// Add event listener 
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);


    // Get names
    let table = document.getElementById('names');
    // Get items from table
    let items = td.querySelectAll('td.table-item');

    // Loop through collection-item Lis
    for(let i = 0; i < td.length; i++) {
        let a = td[i].getElementsbyTagName('a')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            td[i].style.display = '';
        } else {
            td[i].style.display = 'none';
        }
    }

};

