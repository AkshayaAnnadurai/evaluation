// write js code here corresponding to matches.html
var arr=JSON.parse(localStorage.getItem("schedule"))
var arr2=JSON.parse(localStorage.getItem("favourites"))||[];
arr.map(function(elem)
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
    td6.innerText="Add as favourites";
    td6.style.color="green";
    td6.style.cursor="pointer"
    td6.addEventListener("click",function()
    {
        display(elem);
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
})
var filter=document.getElementById("filterVenue")
filter.addEventListener('change',function(){
    document.querySelector("tbody").innerHTML=""
    var filterVal=document.getElementById("filterVenue").value
arr.filter(a=>a.venues==filterVal).map(elem=>{
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
    td6.innerText="Add as favourites";
    td6.style.color="green";
    td6.style.cursor="pointer"
    td6.addEventListener("click",function()
    {
        display(elem);
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
})
})
function display(elem){
arr2.push(elem)
localStorage.setItem("favourites",JSON.stringify(arr2))
}
