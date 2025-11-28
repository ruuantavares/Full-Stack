import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        // .env - dotenv
        this.db = new Sequelize({
            database: 'api-cadastro-usuario',
            host: 'dpg-d4l285u3jp1c7394vjrg-a',
            username: 'api_cadastro_usuario_user',
            password: 'XK4LnDWJDvqbqW2h9PkqJAXsvUh6UCLW',
            dialect: 'postgres'
        })
    }
}

export default new Database()