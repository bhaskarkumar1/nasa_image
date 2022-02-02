const express= require("express")
const app= express()
const https=require("https")

app.get("/",function(req,res){
  // res.send("Hello bye!")

  const url="https://api.nasa.gov/planetary/apod?api_key=zFuMlRndKXenLHc2qGM8reCEnkmVMGeij3kp9Avc"
  https.get(url,function(response){
  console.log(response.statusCode);

response.on("data",function(data){
  const nasaData= JSON.parse(data);
  // console.log(nasaData);
  const img= nasaData.url
  const title=nasaData.title
console.log(img)
console.log(title)
res.write("< img src="+ img +">");

// res.send("<img src=" + img + "  style = width:20%;>");
res.write(title);
// res.send("<h1>" title "</h1>");

res.send()

})

});


});


app.listen(3000, function(req,res){
  console.log("Server is running at port 3000");
});
