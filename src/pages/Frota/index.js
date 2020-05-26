import React, { useState } from 'react'
import { PageWrapper } from '../../components'

const FrotaPage = () => {
  const [veiculos] = useState([
    {
      id: 'testetesteteste',
      plate: 'TST0101',
    },
  ])

  return (
    <PageWrapper>
      <section>
        <h1>Adicionar novo veiculo</h1>
        <div>
          <input type='text' />
          <button>+</button>
        </div>
      </section>
      <section>
        <h2>Veículos</h2>
        <ul>
          {veiculos.map((veiculo) => (
            <li key={veiculo.id}>
              <span>{veiculo.plate}</span>
              <button>X</button>
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  )
}

export default FrotaPage
