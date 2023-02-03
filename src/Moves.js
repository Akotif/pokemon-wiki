import React from 'react'
import { Table } from 'react-bootstrap'
import { useState } from 'react'

const Moves = (props) => {

    let arrayLength = (props.pokeCategories.moves.length)
    const [array, setArray] = useState(Array(arrayLength).fill(""))

    let menu = props.menu
    return (
        <table className='tableInfo'>
            <thead>
            </thead>
            <tbody>
                {array.map((item,index) => (
                    <tr key={index}>
                        <td className='moves'>{props.pokeCategories.moves[index].move.name}</td>
                        <td className='movesLeft'>l-method: {props.pokeCategories.moves[index].version_group_details[0].move_learn_method.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Moves
