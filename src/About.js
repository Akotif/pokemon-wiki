import React from 'react'
import { Button } from 'react-bootstrap'

const About = (props) => {
  console.log(props)
  return (
    <div>
      <table className='tableInfo'>
        <thead>
          <tr className='AboutRow'>
            <td className='AboutSpecies'>{props.species}</td>
          </tr>
          <tr className='AboutRow'>
            <td className='AboutFirst'>Height: {props.pokeAbout.height}m</td>
          </tr>
          <tr className='AboutRow'>
            <td className='About'>Weight: {props.pokeAbout.weight}kg</td>
          </tr>
          <tr className='AboutRow'>
            <td className='About'> Ability: </td>
            {props.pokeCategories.abilities.map((item, index) => (
              <td key={index} className='About'>{item.ability.name}/</td>
            ))}
          </tr>
          <tr>
            {props.pokeAbout.types.map((item, index) => (
              <td key={index} className='About'>
                <Button size="sm" style={{ marginTop:"20px",borderRadius:"10px", fontWeight:"400"}} variant='success'>{item.type.name}</Button>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    </div>
  )
}

export default About
