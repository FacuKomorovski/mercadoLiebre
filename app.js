const express = require("express");
const app = express();

const path = require ("path");

// ruta absoluta carpeta public
const publicPath = path.resolve(__dirname , "./public");

app.use (express.static (publicPath));

const port = process.env.PORT || 3033;

/*inicializo servidor 3033 
ruta localhost:3033*/
app.listen (port, () => 
    console.log(`Servidor corriendo en Puerto ${port}}`)
);

app.get("/", (req,res)=>
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
);