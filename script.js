//firstclass ticket
document.getElementById("fr-plus").addEventListener("click",function(){
    ticketNumber(true)
})

document.getElementById("fr-minus").addEventListener("click",function(){
    ticketNumber(false)
})

function ticketNumber(increase){
    const frTicket=document.getElementById("frTicket");
    let parFr=parseInt(frTicket.innerText);
    
    if(increase==true){
        parFr=parFr+1;
    }
    if(increase==false && parFr>0){
        parFr=parFr-1;
    }
    //frTicket.innerText=parFr;
}



function ticketNumber(increase){
    let frTicket= parseInt(document.getElementById("frTicket").innerText);
    if(increase==true){
        frTicket=frTicket+1;
    }
    if(increase==false && frTicket>0){
        frTicket=frTicket-1;
    }

    document.getElementById("frTicket").innerText=frTicket;
}