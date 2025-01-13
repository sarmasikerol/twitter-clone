import React from 'react'
import Form from '../../components/form'

const Main = ({user}) => {
  return (
    <main>
        <header>
            Anasayfa
        </header>

        <Form user={user}/>
    </main>
  )
}

export default Main