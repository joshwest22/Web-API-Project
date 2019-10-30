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
    
    var charUrls = films.results[0].characters;
    console.log("charUrls",charUrls);
    
    var charPromises = charUrls.map(function(charUrls)
    {
        console.log("charPromises", charPromises);
        return d3.json(charUrls);       
    })
    
    Promise.all(charPromises).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d){
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(values[0].name)
        })
        
    })
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
    .attr("class", function(d) {return d.episode_id}) //gives each film a unique class tag
    //.on("click", function(){alert("WORKS")}) 
    .on("click", function(film){
       console.log("clicked");
       //getInfoList(films);
       if(film.episode_id == "4"){
            clearInfo("#infoList *");
            console.log("first movie in the list");
            getInfoList(films[0]);
            console.log(films);
            }
        else if(film.episode_id == "2"){
            clearInfo("#infoList *");
            console.log("second movie in the list");
            getInfoList(films[1]);
            console.log(films[1])} //this correctly displays the second opening_crawl
       else if(film.episode_id == "1"){
           clearInfo("#infoList *");
           getInfoList(films[2]);
           console.log("third movie in the list")}
       else if(film.episode_id == "3"){
           clearInfo("#infoList *");
           getInfoList(films[3]);
           console.log("fourth movie in the list")}
       else if(film.episode_id == "6"){
           clearInfo("#infoList *");
           getInfoList(films[4]);
           console.log("fifth movie in the list")}
       else if(film.episode_id == "5"){
           clearInfo("#infoList *");
           getInfoList(films[5]);
           console.log("sixth movie in the list")}
       else if(film.episode_id == "7"){
           clearInfo("#infoList *");
           getInfoList(films[6]);
           console.log("seventh movie in the list")}
   })
}

var getInfoList = function(film)
{
    console.log("line 76");
    console.log(film);
    var crawl = film.opening_crawl;
    d3.select("#infoList")
    .append("h1")
    .text(film.title + " ")
    .attr("style", "font-size: 40px; text-decoration: underline;")
    
    d3.select("#infoList")
    .append("span")
    .text("Opening crawl")
    .on("click", function(d)
        {
            clearInfo(".openingCrawl")
        
            d3.select("#infoList")//subject to change
            .append("p")
            .text('"' + crawl + '"')
            .attr("class", "openingCrawl")
        }
       )
}

var clearInfo = function(selector)
{
    d3.selectAll(selector)
    .remove()
}



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