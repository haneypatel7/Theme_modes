let modebtn=document.querySelector("#mode");
let currmode="light";

modebtn.addEventListener("click",()=>
{
    if(currmode=="light")
    {
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currmode="light"
        document.querySelector("body").style.backgroundColor="white";
    }
    

})

function myfunction()
{
    document.getElementById("p1").innerHTML="This is developed by haneypatel";
}