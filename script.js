//firstclass ticket

function ticketNumber(ticket,increase){
    let frTicket= document.getElementById(ticket);
    let parfrTicket=parseInt(frTicket.innerText);
    if(increase==true){
        parfrTicket=parfrTicket+1;
    }
    if(increase==false && parfrTicket>0){
        parfrTicket=parfrTicket-1;
    }

    frTicket.innerText=parfrTicket;
    tk()
}

function tk(){
    let frTk=parseInt(document.getElementById("frTicket").innerText);
    let resultfrTk=frTk*5000;
    document.getElementById("frTk").innerText=resultfrTk;
    let scTk=parseInt(document.getElementById("scTicket").innerText);
    let resultScTk=scTk*3000;
    document.getElementById("scTk").innerText=resultScTk;
    let trTk=parseInt(document.getElementById("trTicket").innerText);
    let resultTrTk=trTk*2000;
    document.getElementById("trTk").innerText=resultTrTk;
    
    let frTax=resultfrTk*0.1;
    document.getElementById("frVat").innerText=frTax;

    let scTax=resultScTk*0.1;
    document.getElementById("scVat").innerText=scTax;

    let trTax=resultTrTk*0.1;
    document.getElementById("trVat").innerText=trTax;

    let total=resultfrTk+resultScTk+resultTrTk+frTax+scTax+trTax;
    document.getElementById("totalTk").innerText=total;
}
