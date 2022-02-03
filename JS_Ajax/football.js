let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams"
let urlMatches = "https://api.football-data.org/v2/matches"

fetch(urlMatches, {
method: "GET",
    
    headers: {
        "x-auth-token":"f7bb2fe4ff234b0e8fb40058d6d5a473"
    }
})
.then (response => response.json())
.then (function (data) {
    let html="";
    data.matches.forEach(element=> {
        html += "<li>" + element.name + "</li>";
        });
    document.getElementById("matches").innerHTML = html;
    } );


fetch(urlTeams, {
method: "GET",

    headers: {
        "x-auth-token":"f7bb2fe4ff234b0e8fb40058d6d5a473"
    }
})
.then (response => response.json())
.then (function (data) {
    let html="";
    data.teams.forEach(element=> {
        html += "<li><img src='" + element.crestUrl + "'/>" + element.name + "</li>";
        });
    document.getElementById("teams").innerHTML = html;
    } );




