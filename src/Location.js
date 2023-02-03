import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Location = (props) => {

    let url = (props.pokeCategories.cocation)
    const [data,setData]=useState()

    let menu = props.menu
    return (
        <table className='tableInfo'>
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td className='moves'>{props.pokeCategories.location}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Location