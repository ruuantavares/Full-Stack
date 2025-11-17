import { useEffect, useState } from 'react'
import { getUsers } from '../../api/users'
import { Link } from 'react-router-dom'

function Users() {
    const [conteudo, setConteudo] = useState(<>Carregando</>)

    async function TranformaEmLista() {
        const todosUsuarios = await getUsers()

        console.log(todosUsuarios)

        return todosUsuarios.map(user =>
            <div className='card char' key={user.id}>
                <h2>{user.name}</h2>

            </div>
        )
    }

    useEffect(() => {
        async function carregar() {
            setConteudo(
                await TranformaEmLista()
            )
        }
        carregar()
    }, [])

    return (
        <main>
            <Link to='/'>
                <button>
                    Voltar para home
                </button>
            </Link>
            {/* Filtros */}
            <div className='lista-principal'>
                {conteudo}
            </div>
        </main>
    )
}

export default Users
