const express = require("express")
const port = 8080
const routes = require("./routes")
const cors = require("cors")
const app = express()

//json parser
app.use(express.json())
app.use(cors())
app.use("/api", routes)

app.listen(port, () => {
	console.log('alive listening at: '+port)
})
