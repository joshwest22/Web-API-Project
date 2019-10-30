var setBanner = function(message)
{
    d3.select("#bannerTitle")
    .text(message)
}
var consoleFilms = [];
var filmPromise =
d3.json("https://swapi.co/api/films/")
//d3.json("https://ghibliapi.herokuapp.com/films") //Works with this API bc array, but not with Star Wars

filmPromise.then(
function(films)
{   
    consoleFilms = films.results; // DO NOT USE FOR CODING; Works for console
    console.log(consoleFilms);
    setBanner("STAR WARS API");
    getFilmList(films.results);// Passes the actual array to the rest of the "films" in the program
    console.log("films", films)
    var urls = films.results[0].opening_crawl;
    console.log(urls);
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
    .attr("class", function(d) {return d.episode_id}) //gives each film a unique class
    //.on("click", function(){alert("WORKS")}) 
    .on("click", function(d){
       console.log("clicked");
       //getInfoList(films);
       if(d.episode_id == "4"){
            console.log("first movie in the list")
            getInfoList(films[0]);
           console.log(films[0])
       }
        else if(d.episode_id == "2"){
            console.log("second movie in the list")
            getInfoList(films[1])}
       else if(d.episode_id == "1"){
           console.log("third movie in the list")}
       else if(d.episode_id == "3"){
           console.log("fourth movie in the list")}
       else if(d.episode_id == "6"){
           console.log("fifth movie in the list")}
       else if(d.episode_id == "5"){
           console.log("sixth movie in the list")}
       else if(d.episode_id == "7"){
           console.log("seventh movie in the list")}
   })
}

var getInfoList = function(films)
{
    console.log("inside infolist")
    d3.select("#infoList")
    .selectAll("div")
    .data(films)
    .enter()
    .append("span")
    .text(function(film){
    return film.opening_crawl       
                   })
}
var clearInfo = function()
{
    d3.select("#infoList")
    .selectAll("div")
    .remove()
}
/*
if(film.episode_id == "4"){
           return film.opening_crawl}
        else if(film.episode_id == "2"){
           return films[1].opening_crawl}
       else if(film.episode_id == "1"){
           return films[2].opening_crawl}
       else if(film.episode_id == "3"){
           return films[3].opening_crawl}
       else if(film.episode_id == "6"){
           return films[4].opening_crawl}
       else if(film.episode_id == "5"){
           return films[5].opening_crawl}
       else if(film.episode_id == "7"){
          return films[6].opening_crawl}

*/
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