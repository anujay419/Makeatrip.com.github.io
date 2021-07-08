function handleSubmit () {
    const from = document.getElementById('location1').value;
    const to = document.getElementById('location2').value;
    const date = document.getElementById('date').value;

    // to set into local storage
    localStorage.setItem("FROM", from);
    localStorage.setItem("TO", to);
    localStorage.setItem("DEPARTURE", date); 
    
    // sessionStorage.setItem("NAME", name);
    // sessionStorage.setItem("SURNAME", surname);
    var dropdown = document.getElementById("class");
    var dropdownvalue = dropdown.value;
    localStorage.setItem("DROPDOWN", dropdownvalue);


    return;
}