import morgan from 'morgan';
import imagesRoute from '../routes/images.route.js'
import cors from 'cors';


export class Server {
    _app
    _routes

    constructor(app) {
        this._app = app()
        this.middleware()
        this.routes()
    }
    
    middleware() {
        this._app.use(cors())
        this._app.use(morgan('dev'))
    }

    routes() {
        this._app.use('/images', imagesRoute)
    }

    listen(port) {
        this._app.listen(port, () => {
            console.log(`Server listen on port ${port}`)
        })
    }
}