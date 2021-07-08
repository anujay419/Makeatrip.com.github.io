window.addEventListener('load', () => {

   

    // Via local Storage
    const where = localStorage.getItem('DESTI');
    const ddate = localStorage.getItem('DDATE');
      
    
    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById("result-des").innerHTML = where;
    document.getElementById("result-ddate").innerHTML = ddate;
    

    var dropdownvalue = localStorage.getItem("CATEGORY");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-cat").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'AC':
            let p = 1500;
            document.getElementById("result-price").innerHTML = p;
            break;
        case 'Non-AC':
            let r = 800;
            document.getElementById("result-price").innerHTML = r;
            break;
        case 'Sleeper':
            let i = 1200;
            document.getElementById("result-price").innerHTML = i;
            break;
        case 'Luxury':
            let j = 2500;
            document.getElementById("result-price").innerHTML = j;
            break;    
    
        default:
            break;
    }
    document.getElementById("result-des1").innerHTML = where;
    document.getElementById("result-ddate1").innerHTML = ddate;
    

    var dropdownvalue = localStorage.getItem("CATEGORY");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-cat1").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'AC':
            let p = 1500;
            document.getElementById("result-price1").innerHTML = p;
            break;
        case 'Non-AC':
            let r = 800;
            document.getElementById("result-price1").innerHTML = r;
            break;
        case 'Sleeper':
            let i = 1200;
            document.getElementById("result-price1").innerHTML = i;
            break;
        case 'Luxury':
            let j = 2500;
            document.getElementById("result-price1").innerHTML = j;
            break;    
    
        default:
            break;
    }
    document.getElementById("result-des2").innerHTML = where;
    document.getElementById("result-ddate2").innerHTML = ddate;
    

    var dropdownvalue = localStorage.getItem("CATEGORY");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-cat2").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'AC':
            let p = 1500;
            document.getElementById("result-price2").innerHTML = p;
            break;
        case 'Non-AC':
            let r = 800;
            document.getElementById("result-price2").innerHTML = r;
            break;
        case 'Sleeper':
            let i = 1200;
            document.getElementById("result-price2").innerHTML = i;
            break;
        case 'Luxury':
            let j = 2500;
            document.getElementById("result-price2").innerHTML = j;
            break;    
    
        default:
            break;
    }
    document.getElementById("result-des3").innerHTML = where;
    document.getElementById("result-ddate3").innerHTML = ddate;
    

    var dropdownvalue = localStorage.getItem("CATEGORY");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-cat3").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'AC':
            let p = 1500;
            document.getElementById("result-price3").innerHTML = p;
            break;
        case 'Non-AC':
            let r = 800;
            document.getElementById("result-price3").innerHTML = r;
            break;
        case 'Sleeper':
            let i = 1200;
            document.getElementById("result-price3").innerHTML = i;
            break;
        case 'Luxury':
            let j = 2500;
            document.getElementById("result-price3").innerHTML = j;
            break;    
    
        default:
            break;
    }
    document.getElementById("result-des4").innerHTML = where;
    document.getElementById("result-ddate4").innerHTML = ddate;
    

    var dropdownvalue = localStorage.getItem("CATEGORY");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-cat4").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'AC':
            let p = 1500;
            document.getElementById("result-price4").innerHTML = p;
            break;
        case 'Non-AC':
            let r = 800;
            document.getElementById("result-price4").innerHTML = r;
            break;
        case 'Sleeper':
            let i = 1200;
            document.getElementById("result-price4").innerHTML = i;
            break;
        case 'Luxury':
            let j = 2500;
            document.getElementById("result-price4").innerHTML = j;
            break;    
    
        default:
            break;
    }
   

   

   

   

   


})