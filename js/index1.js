function handleSubmi () {
    const where = document.getElementById('loc').value;
    const sdate = document.getElementById('sdate').value;
    const rdate = document.getElementById('rdate').value;

    // to set into local storage
    localStorage.setItem("WHERE", where);
    localStorage.setItem("SDATE", sdate);
    localStorage.setItem("RDATE", rdate); 
    
    
    


    return;
}