//firstclass ticket

document.getElementById("fr-plus").addEventListener("click",function(){
    let id=document.getElementById("frTicket");
    let parid=parsInt(id.value);
    let result=parid+1;
    id.value=result;
})