import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const TitleAndImage = (props) => {

  const [butonStyle, setButonStyle] = useState("favoriteButton")
  let allPokes = props.allPokes

  const setFavorite = () => {
    props.setFavorites([...props.favorites, props.name])
    if (butonStyle === "favoriteButton")
      setButonStyle("favoriteYellow")
    else
      setButonStyle("favoriteButton")
  }

  const clickHandler = (e) => {
    switch (e.target.className) {
      case "image_2":
        props.setPokeImage(props.pokeImage1)
        props.setPokeImage1(props.pokeImage)
        break;
      case "image_3":
        props.setPokeImage(props.pokeImage2)
        props.setPokeImage2(props.pokeImage)
        break;

      default:
        break;
    }
  }

  const renderImage = () => {
    return (
      <img onClick={(e) => clickHandler(e)} className="image_1" src={props.pokeImage} />
    )
  }

  const renderImageSmall = () => {
    return (
      <tr>
        <td>
          <img onClick={(e) => clickHandler(e)} className="image_2" src={props.pokeImage1} />
        </td>
        <td>
          <img onClick={(e) => clickHandler(e)} className="image_3" src={props.pokeImage2} />
        </td>
      </tr>
    )
  }

  return (
    <div>
      <Card.Title style={{ alignItems: "center", textAlign: "center", marginTop: "1rem", color: "green" }}>
        {props.name}
      </Card.Title>
      <button className={butonStyle} onClick={() => setFavorite()}
        style={{ float: "right", marginRight: "10px", textAlign: "center" }}>F</button>
      {renderImage()}
      {renderImageSmall()}
    </div>
  )
}
export default TitleAndImage