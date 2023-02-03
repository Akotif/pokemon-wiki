import React from 'react'

const Evolutions = (props) => {
  return (
    <table className='tableInfo'>
      <thead>
          <tr className='EvolvesRow'>
            <td className='Evolves'>{props.evolutions.species.name}</td>
          </tr>
          <tr className='EvolvesRow'>
            <td className='Evolves'>{props.evolutions.evolves_to[0].species.name}</td>
          </tr>
          <tr className='EvolvesRow'>
            <td className='Evolves'>{props.evolutions.evolves_to[0].evolves_to[0].species.name}</td>
          </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

export default Evolutions
