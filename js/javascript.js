var setBanner = function(message)
{
    d3.select("#bannerTitle")
    .text(message)
}

var filmPromise=
d3.json("https://swapi.co/api/films/")
//d3.json("https://ghibliapi.herokuapp.com/films")

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
    //.on("click", function(d){getInfoList(d)}) 
}

/*var getInfoList = function(films)
{
    d3.select("#infoList")
    
}*/

/*var changeCSS = function(allegiance) // do this when light or dark is clicked
{
    d3.select(link)
    .on("click", function(
    {
        if (click == #light)
        {
            
        }
    }))
    .attr("href", function(alegiance)
         {
            if (allegiance = light) // make sure to attach a new allegiance attr when light clicked
            {
                return "light.css"
            }
            else if (allegiance = dark) // make sure to attach a new allegiance attr when dark clicked
            {
                return "dark.css"
            }
    })
}*/