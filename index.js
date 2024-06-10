const express= require("express");

const app=express();

app.get("/", (req,res) => {
    //para saber si anda
    res.send("Cac Deploy");
})

//se modifica para preguntar qué puerto se puede usar al servidor
const port =process.env.port || 3000;

app.listen(port, ()=> console.log(`http://localhost:${port}`));

//OTRA FORMA DE ARRANCAR EL LOCAL
//AGREGAR AL PACKAGE EN SCRIPT
//"start":"node index.js",
//"dev": "nodemon index.js"

//CORRER EN TERMINAL: npm run dev
//SE AUTOGUARDA Y LO REINICIA