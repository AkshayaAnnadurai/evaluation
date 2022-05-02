// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.getElementById("masaiForm")
var arr=JSON.parse(localStorage.getItem("schedule"))||[];
form.addEventListener("submit",myfunc)
function myfunc(){
    event.preventDefault()
    var matchnum=document.getElementById("matchNum").value
    var teamA=document.getElementById("teamA").value
    var teamB=document.getElementById("teamB").value
var date=document.getElementById("date").value
var venue=document.getElementById("venue").value
var obj={
    matchnums:matchnum,
    team1:teamA,
    team2:teamB,
    dates:date,
    venues:venue

}
arr.push(obj)
localStorage.setItem("schedule",JSON.stringify(arr))
}