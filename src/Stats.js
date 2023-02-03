import React from 'react'
import { useState } from 'react'
const Stats = (props) => {
    let arrayLength = (props.pokeCategories.stats.length)

    const [array, setArray] = useState(Array(arrayLength).fill(""))

    return (
        <table className='tableInfo'>
            <thead>
                {array.map((item, index) => (
                    <tr key={index} className='StatRow'>
                        <td className='stats'>{props.pokeCategories.stats[index].stat.name}</td>
                        <td className='statsLeft'>
                            <input onChange={()=>console.log()} value={props.pokeCategories.stats[index].base_stat}
                                className="slider" type="range"></input>
                        </td>
                
                    </tr>

                ))}


            </thead>
            <tbody>

            </tbody>
        </table>
    )
}
export default Stats
