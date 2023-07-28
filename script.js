var res = fetch("https://api.openbrewerydb.org/v1/breweries");


res.then((data)=>data.json()).then((data1)=>{
    console.log(data1);
    for(var i=0; i<data1.length; i++){
        
        var div = document.createElement("div");
        div.innerHTML= 
        `<h2>Brewery Type:${data1[i].brewery_type}</h2>
       <p> Name:${data1[i].name}</p>
     <p>Country:${data1[i].country}</p>
       <p> City:${data1[i].city}</p>
       <p> ID:${data1[i].id}</p>`
        document.body.append(div);
    }
});
                                 