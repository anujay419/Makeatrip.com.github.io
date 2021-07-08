function handleSubm () {
    const where = document.getElementById('desti').value;
    const ddate = document.getElementById('ddate').value;
    

    // to set into local storage
    localStorage.setItem("DESTI", where);
    localStorage.setItem("DDATE", ddate);
    
    
    // sessionStorage.setItem("NAME", name);
    // sessionStorage.setItem("SURNAME", surname);
    var dropdown = document.getElementById("category");
    var dropdownvalue = dropdown.value;
    localStorage.setItem("CATEGORY", dropdownvalue);


    return;
}