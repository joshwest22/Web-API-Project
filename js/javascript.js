var setBanner = function(message)
{
    d3.select("#bannerTitle")
    .text(message)
}

var filmPromise=
    d3.json("https://swapi.co/api/films/")
filmPromise.then(
function(films)
{
    setBanner("STAR WARS API");
    getFilmList(films);
    console.log("films", films)
},
function(err)
{
    setBanner("The balance between light and dark has been broken! No films found")
    console.log("ERROR", err)
})

var getFilmList = function(films)
{
   d3.select("#filmList")
    .selectAll("div")
    .data(films)
    .enter()
    .append("div")
    .text(function(film){return film.title})
    .on("click", function(d){getInfoList(d)}) 
}
/*
var getInfoList = function(films)
{
    
}*/