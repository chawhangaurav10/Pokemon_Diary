import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemonthumb from "./Components/Pokemonthumb";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

function App() {
  const [link, setNextLink] = useState([
    "https://pokeapi.co/api/v2/pokemon?limit=20",
  ]);
  const [allPokemons, setAllPokemons] = useState([]);

  async function getAllLinks() {
    await fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setNextLink(data.next);
        findPokemonObjects(data.results);
      });

    await console.log(allPokemons);
  }

  const findPokemonObjects = (results) => {
    results.map(async (nameUrl) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nameUrl.name}`
      );
      res.json().then((data) => {
        setAllPokemons((current) => [...current, data]);
      });
    });
  };

  useEffect(() => {
    getAllLinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h2 className="my-3">Pokemon Diary</h2>
      <Row xs={3} md={5} lg={7} className="g-5 my-2 mx-2">
        {allPokemons.map((pokemon) => (
          <Col >
            <Pokemonthumb 
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              key={pokemon.id}
              type={pokemon.types[0].type.name}

              height = {pokemon.height}
              weight = {pokemon.weight}
              stat1 = {pokemon.stats[0].stat.name}
              stat2 = {pokemon.stats[1].stat.name}
              stat3 = {pokemon.stats[2].stat.name}
              stat4 = {pokemon.stats[3].stat.name}
              stat5 = {pokemon.stats[4].stat.name}
              stat6 = {pokemon.stats[5].stat.name}
              bs1 = {pokemon.stats[0].base_stat}
              bs2 = {pokemon.stats[1].base_stat}
              bs3 = {pokemon.stats[2].base_stat}
              bs4 = {pokemon.stats[3].base_stat}
              bs5 = {pokemon.stats[4].base_stat}
              bs6 = {pokemon.stats[5].base_stat}
            />
          </Col>
        ))}
      </Row>
      <button type="submit" className="my-5 btn btn-warning"onClick={()=>getAllLinks()}>
        Load More
      </button>
    </div>
  );
}
export default App;
