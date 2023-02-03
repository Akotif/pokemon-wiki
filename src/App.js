import { Container, Col, Row, Input } from "reactstrap";
import PokeCard from "./Card";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [allPokes, setAllPokes] = useState([])
  const [allPokesTemp, setAllPokesTemp] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [favorites,setFavorites]=useState([])
  const [allIds,setIds]=useState([])
  console.log(allPokes)
  
  let url = "https://pokeapi.co/api/v2/pokemon/"

  useEffect(() => {
    axios.get(url, {
      params: {
        limit: 12
      }
    })
      .then((res) => {
        setAllPokes(res.data.results)
        setAllPokesTemp(res.data.results)
      }).catch(console.error)

      allPokes.map((item)=>(
        setAllPokes({item,id:"0"})
      ))
      console.log(allPokes)

  }, [])

  

  const changeHandler = (value) => {
    setSearchValue(value)
    let temp = allPokesTemp.filter(item => item.name.indexOf(value.toLowerCase()) > (-1))
    if(value!==""){
      setAllPokes(temp)
    }
    else{
    setAllPokes(allPokesTemp)
    }
    
  }

  return (
    <Container>
      <input onChange={(e) => changeHandler(e.target.value)}
        placeholder="Search Pokemon" value={searchValue} className="searchBar" type="text"></input>
      <Row>
        {allPokes.map((poke, index) => {
          return (
            <Col key={index} xs={3} sm={3}>
              <PokeCard allIds={allIds} setIds={setIds} favorites={favorites} 
              setFavorites={setFavorites} allPokes={allPokes} setAllPokes={setAllPokes} poke={poke} id={index}></PokeCard>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default App;
