let hotel=[];
function addreserve(){
    let customer = document.getElementById("cname").value;
    let noofguest = document.getElementById("nguest").value;
    let reservation = document.getElementById("rtime").value;

    hotel.push({
        customer,noofguest,reservation
    });
    displayreservation();
    
   document.getElementById("cname").value='';
   document.getElementById("nguest").value='';
   document.getElementById("rtime").value='';
}

function displayreservation(){
    let output = '';
    hotel.forEach(reservation=>{
   output += `CustomerName:${reservation.customer},NumberOfGuest:${reservation.noofguest},ReservationTime:${reservation.reservation}`
    });

    document.getElementById("Reserve").innerHTML = output;
}