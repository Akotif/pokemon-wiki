import React, { useEffect, useState } from 'react'
import { Card, Row } from "react-bootstrap";
import Stats from './Stats';
import axios from "axios";
import Moves from './Moves';
import Location from './Location';
import Evolutions from './Evolutions';
import TitleAndImage from './TitleAndImage';
import About from "./About"

const PokeCard = (props) => {

    const [pokeCategories, setPokeCategory] = useState()
    const [evolutions, setEvolutions] = useState()
    const [species, setSpecies] = useState()
    const [pokeAbout, setPokeAbout] = useState()
    const categories = ["About", "Stats", "Moves", "Evolution"]
    const [menu, setMenu] = useState("Stats")
    const [pokeImage, setPokeImage] = useState()
    const [pokeImage1, setPokeImage1] = useState()
    const [pokeImage2, setPokeImage2] = useState()
    const [pokeName, setPokeName]=useState(props.poke.name)


    let urlEvo = "https://pokeapi.co/api/v2/evolution-chain/"
    let urlSpecies = "https://pokeapi.co/api/v2/pokemon-species/"
    let url = "https://pokeapi.co/api/v2/pokemon/"

    useEffect(() => {
        axios.get(props.poke.url)
            .then((res) => {
                setPokeCategory(
                    {
                        abilities: res.data.abilities, stats: res.data.stats,
                        moves: res.data.moves, location: res.data.location_area_encounters
                    })
                setPokeAbout({ height: res.data.height, weight: res.data.weight, types: res.data.types })
                setPokeImage(res.data.sprites.other.dream_world.front_default)
            })

        axios.get(urlSpecies + (props.id + 1))
            .then((res) => setSpecies(res.data.flavor_text_entries[1].flavor_text))
        setMenu("Stats")

        axios.get(urlEvo + (props.id + 1))
            .then((res) => {
                setEvolutions(res.data.chain);
                console.log(res.data)
            })
    }, [props.id, props.allPokes])

    useEffect(() => {
        let url2
        let url3
        if ((props.id + 1) % 3 === 1) {
            url2 = url + (props.id + 2)
            url3 = url + (props.id + 3)
        }
        else if ((props.id + 1) % 3 === 2) {
            url2 = url + (props.id + 2)
            url3 = url + (props.id)
        }
        else {
            url2 = url + (props.id)
            url3 = url + (props.id - 1)
        }
        axios.get(url2)
            .then((res) => {
                setPokeImage1(res.data.sprites.other.dream_world.front_default)
            })
        axios.get(url3)
            .then((res) => {
                setPokeImage2(res.data.sprites.other.dream_world.front_default)
            })

    }, [props.id,props.allPokes]);

    const renderMenu = () => {
        if (pokeCategories) {
            switch (menu) {
                case "Stats":
                    return <Stats menu={menu} pokeCategories={pokeCategories}></Stats>
                    break;
                case "Moves":
                    return <Moves id={props.id + 1} menu={menu} pokeCategories={pokeCategories}></Moves>
                    break;
                case "Evolution":
                    return <Evolutions name={props.poke.name} menu={menu}
                        evolutions={evolutions}></Evolutions>
                    break;
                case "About":
                    return <About name={props.poke.name} pokeCategories={pokeCategories}
                        pokeAbout={pokeAbout} menu={menu} species={species}></About>
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <Card style={{
            width: '15rem', height: '36rem', marginTop: "50px", borderRadius: "10px",
            border: "1px solid green"
        }}>
            <TitleAndImage
                evolutions={evolutions} allPokes={props.allPokes} favorites={props.favorites} setFavorites={props.setFavorites}
                id={props.id + 1} name={props.poke.name} url={props.poke.url} pokeImage={pokeImage} pokeImage1={pokeImage1} pokeImage2={pokeImage2}
                setPokeImage1={setPokeImage1} setPokeImage2={setPokeImage2} setPokeImage={setPokeImage}>
            </TitleAndImage>
            <Card.Body
                style={{ background: "white", borderRadius: "20px" }}>
            </Card.Body>
            <Card.Body style={{
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px", background: "#d2ffd4"
            }}>
                <table className='tableButton'>
                    <tbody>
                        <tr>
                            {categories.map((item, index) => (
                                <td onClick={() => setMenu(item)}
                                    className='categories' key={index}>{item}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </Card.Body>
            <Card.Body style={{
                borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"
                , background: "#d2ffd4", overflowY: "scroll"
            }}>
                {renderMenu()}
            </Card.Body>
        </Card>
    )
}
export default PokeCard
