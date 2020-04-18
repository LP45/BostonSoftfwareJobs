
// for (let i = 0; i < 7; i++){
    let trump = "";

    function myFunction() {
    let logo = prompt("Copy and Paste URL of company logo");
    let name = prompt("What is the company name?")
    let logoArray=[];
    let companyArray=[];

    logoArray.push(logo);
    companyArray.push(name);
     
       
    for (let i = 0; i < logoArray.length; i++) {
        
        trump += `<img width=250 src ="${logoArray[i]}">
        <p>${companyArray}</p>`
        document.getElementById("demo").innerHTML= trump;
        
    }

}

function clearFunction(){
    
}
