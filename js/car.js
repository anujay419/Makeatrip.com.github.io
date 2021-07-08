window.addEventListener('load', () => {
    // Via local Storage
    const wherer = localStorage.getItem("WHERE");
    const sdater = localStorage.getItem("SDATE");
    const rdater = localStorage.getItem("RDATE");  
    
    document.getElementById('result-where').innerHTML = wherer;
    document.getElementById('result-sdate').innerHTML = sdater;
    document.getElementById('result-rdate').innerHTML = rdater;

    document.getElementById('result-where1').innerHTML = wherer;
    document.getElementById('result-sdate1').innerHTML = sdater;
    document.getElementById('result-rdate1').innerHTML = rdater;

    document.getElementById('result-where2').innerHTML = wherer;
    document.getElementById('result-sdate2').innerHTML = sdater;
    document.getElementById('result-rdate2').innerHTML = rdater;

    document.getElementById('result-where3').innerHTML = wherer;
    document.getElementById('result-sdate3').innerHTML = sdater;
    document.getElementById('result-rdate3').innerHTML = rdater;


})