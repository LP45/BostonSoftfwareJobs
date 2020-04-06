
// for (let i = 0; i < 7; i++){
    

    function myFunction() {
    let logo = prompt("Copy and Paste URL of company logo");

if (logo == "https://www.tcv.com/wp-content/uploads/2016/12/TCV_0054_actifio.png") {
   document.getElementById("demo").innerHTML='<img src ="https://www.tcv.com/wp-content/uploads/2016/12/TCV_0054_actifio.png">Actifio</img>'
}

if (logo == "https://www.agero.com/sites/all/themes/agero/images/logo_header.png") {
   document.getElementById("demo1").innerHTML='<img src ="https://www.agero.com/sites/all/themes/agero/images/logo_header.png">Agero</img>'
}

if (logo == "https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png") {
   document.getElementById("demo2").innerHTML='<img src ="https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png">Akamai</img>'
}

if (logo == "https://www.athenahealth.com/sites/ahcom/themes/ah_theme/assets/images/logo-color.svg") {
   document.getElementById("demo3").innerHTML='<img src ="https://www.athenahealth.com/sites/ahcom/themes/ah_theme/assets/images/logo-color.svg">Athenahealth</img>'
}

if (logo == "http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png") {
   document.getElementById("demo4").innerHTML='<img src ="http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png">LogMeIn</img>'
}

if (logo == "https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg") {
    document.getElementById("demo5").innerHTML='<img src ="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg">TripAdvisor</img>'
}

if (logo == "http://www.codesquad-test.org/assets/img/wayfair_logo.png") {
   document.getElementById("demo6").innerHTML='<img src ="http://www.codesquad-test.org/assets/img/wayfair_logo.png">WayFair</img>'
}

return logo;

}
// myFunction();