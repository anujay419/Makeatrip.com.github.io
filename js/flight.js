window.addEventListener('load', () => {

   

    // Via local Storage
    const from = localStorage.getItem('FROM');
    const to = localStorage.getItem('TO');
    const date = localStorage.getItem('DEPARTURE');  
    
    // const name = sessionStorage.getItem('NAME');
    // const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById("result-from").innerHTML = from;
    document.getElementById("result-to").innerHTML = to;
    document.getElementById("result-date").innerHTML = date;

    var dropdownvalue = localStorage.getItem("DROPDOWN");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-class").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'Economy':
            let p = 1500;
            document.getElementById("result-price").innerHTML = p;
            break;
        case 'Premium Economy':
            let r = 2200;
            document.getElementById("result-price").innerHTML = r;
            break;
        case 'Business':
            let i = 4000;
            document.getElementById("result-price").innerHTML = i;
            break;
            
    
        default:
            break;
    }
    document.getElementById("result-from1").innerHTML = from;
    document.getElementById("result-to1").innerHTML = to;
    document.getElementById("result-date1").innerHTML = date;

    var dropdownvalue = localStorage.getItem("DROPDOWN");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-class1").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'Economy':
            let p = 1500;
            document.getElementById("result-price1").innerHTML = p;
            break;
        case 'Premium Economy':
            let r = 2200;
            document.getElementById("result-price1").innerHTML = r;
            break;
        case 'Business':
            let i = 4000;
            document.getElementById("result-price1").innerHTML = i;
            break;
            
    
        default:
            break;
    }
    document.getElementById("result-from2").innerHTML = from;
    document.getElementById("result-to2").innerHTML = to;
    document.getElementById("result-date2").innerHTML = date;

    var dropdownvalue = localStorage.getItem("DROPDOWN");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-class2").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'Economy':
            let p = 1500;
            document.getElementById("result-price2").innerHTML = p;
            break;
        case 'Premium Economy':
            let r = 2200;
            document.getElementById("result-price2").innerHTML = r;
            break;
        case 'Business':
            let i = 4000;
            document.getElementById("result-price2").innerHTML = i;
            break;
            
    
        default:
            break;
    }
    document.getElementById("result-from3").innerHTML = from;
    document.getElementById("result-to3").innerHTML = to;
    document.getElementById("result-date3").innerHTML = date;

    var dropdownvalue = localStorage.getItem("DROPDOWN");
    // document.querySelector("#result-class").textContent = dropdownvalue;
    document.getElementById("result-class3").innerHTML = dropdownvalue;

    switch (dropdownvalue) {
        case 'Economy':
            let p = 1500;
            document.getElementById("result-price3").innerHTML = p;
            break;
        case 'Premium Economy':
            let r = 2200;
            document.getElementById("result-price3").innerHTML = r;
            break;
        case 'Business':
            let i = 4000;
            document.getElementById("result-price3").innerHTML = i;
            break;
            
    
        default:
            break;
    }



})