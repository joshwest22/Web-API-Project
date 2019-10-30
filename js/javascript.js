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
    
    var charUrls0 = films.results[0].characters;
    console.log("charUrls0",charUrls0);
    
    var charUrls1 = films.results[1].characters;
    console.log("charUrls1",charUrls1);
    
    var charUrls2 = films.results[2].characters;
    console.log("charUrls2",charUrls2);
    
    var charUrls3 = films.results[3].characters;
    console.log("charUrls3",charUrls3);
    
    var charUrls4 = films.results[4].characters;
    console.log("charUrls4",charUrls4);
    
    var charUrls5 = films.results[5].characters;
    console.log("charUrls5",charUrls5);
    
    var charUrls6 = films.results[6].characters;
    console.log("charUrls6",charUrls6);
    
    var charPromises = charUrls0.map(function(charUrls0)
    {
        console.log("charPromises", charPromises);
        return d3.json(charUrls0);       
    })
    
     var charPromises1 = charUrls1.map(function(charUrls1)
    {
        console.log("charPromises1", charPromises1);
        return d3.json(charUrls1);       
    })
     
     var charPromises2 = charUrls2.map(function(charUrls2)
    {
        console.log("charPromises2", charPromises2);
        return d3.json(charUrls2);       
    })
     
     var charPromises3 = charUrls3.map(function(charUrls3)
    {
        console.log("charPromises3", charPromises3);
        return d3.json(charUrls3);       
    })
     
     var charPromises4 = charUrls4.map(function(charUrls4)
    {
        console.log("charPromises4", charPromises4);
        return d3.json(charUrls4);       
    })
     
     var charPromises5 = charUrls5.map(function(charUrls5)
    {
        console.log("charPromises5", charPromises5);
        return d3.json(charUrls5);       
    })
     
     var charPromises6 = charUrls6.map(function(charUrls6)
    {
        console.log("charPromises6", charPromises6);
        return d3.json(charUrls6);       
    })
     
    Promise.all(charPromises).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises1).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d){
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    }) 
    
    Promise.all(charPromises2).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises3).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises4).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises5).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
        })
        
    })
    
    Promise.all(charPromises6).then(function(values)
    {
        console.log("values",values);//gets the array of characters
        d3.select("#filmList")
        .on("click", function(d)
        {
        clearInfo("#charName") //clears the character name from previous films
        d3.select("#characterList")
        .selectAll("li")
        .data(values)
        .enter()
        .append("span")
        .attr("id", "characters")
        .append("ul")
        .append("li")
        .attr("id", "charName")
        .text(function(movie)
        {
            return movie.name
        })
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
    .attr("class", function(d) {return d.episode_id})
    .attr("id", "filmTitle")//gives each film a unique class tag
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
    var clicked = 0;
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