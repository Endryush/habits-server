import Fastify from "fastify"
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

app.register(cors)

// app.register(cors, { 
//   origin : ['']        // ADD URL DE PROD QUE PODE ACESSAR ESSA API
// })

app.register(appRoutes)



app.listen({
  port:3333
}).then(() => console.log('HTTP Server Running'))