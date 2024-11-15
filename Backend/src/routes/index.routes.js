import generarCodigoRoutes from './generarCodigo.routes.js'
import edificiosRoutes from './edificios.routes.js'
import pisosRoutes from './pisos.routes.js'
import sectoresRoutes from './sectores.routes.js'
import activosRoutes from './activos.routes.js'
import ubicacionesRoutes from './ubicaciones.routes.js'

const setupRoutes = (app) => {
    app.use('/api/generarCodigo', generarCodigoRoutes)
    app.use('/api/edificios', edificiosRoutes)
    app.use('/api/pisos', pisosRoutes)
    app.use('/api/sectores', sectoresRoutes)
    app.use('/api/activos', activosRoutes)
    app.use('/api/ubicaciones', ubicacionesRoutes)
}

export default setupRoutes