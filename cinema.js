
const container=document.querySelector(".container");
const amount= document.getElementById("amount");
const count=document.getElementById("count");
const movie =document.getElementById("movie");
const seats=document.querySelectorAll(".seat:not(.reserved)");
container.addEventListener("click",function(input)
{
    if(input.target.classList.contains("seat")&& !input.target.classList.contains("reserved"))
    {
        input.target.classList.toggle("selected");

        Calculate();
       
        
    }
})


movie.addEventListener("change",function()
{
    Calculate();
    
})
function Calculate()
{

    const SelectSeat=container.querySelectorAll(".seat.selected");
    const selectedSeatCount=SelectSeat.length;
    count.innerText=selectedSeatCount;
    amount.innerText=selectedSeatCount*movie.value
}

function reserved()
{
    const reservedseat=container.querySelectorAll(".seat.reserved");
    const reservedseatcount=reservedseat;
    count.innerText=reservedseatcount;
    amount.innerText=reservedseatcount*movie.value;
}
