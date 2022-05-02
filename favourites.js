// write js code here corresponding to favourites.html
var arr2=JSON.parse(localStorage.getItem("favourites"))

arr2.map(function(elem,i)
{
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=elem.matchnums
    var td2=document.createElement("td")
    td2.innerText=elem.team1
    var td3=document.createElement("td")
    td3.innerText=elem.team2
    var td4=document.createElement("td")
    td4.innerText=elem.dates
    var td5=document.createElement("td")
    td5.innerText=elem.venues
    var td6=document.createElement("td")
    td6.innerText="Delete"
    td6.style.cursor="pointer"
    td6.addEventListener("click",function()
    {
        event.target.parentNode.remove()
        arr2.splice(i,i+1)
        localStorage.setItem("favourites",JSON.stringify(arr2))

    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
})