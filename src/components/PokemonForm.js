import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  const [newPokemonData, setNewPokemonData] = useState({
    name:'', 
    hp: 0, 
    frontUrl: '',
    backUrl: ''
  })

  function handleChange(e) {
    setNewPokemonData({
      ...newPokemonData, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    const newPokemon = {
      name: newPokemonData.name,
      hp: newPokemonData.hp,
      sprites: {
        front: newPokemonData.frontUrl,
        back: newPokemonData.backUrl
      }
    }
    e.preventDefault()
    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(addedPokemon => onAddPokemon(addedPokemon))
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemonData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemonData.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemonData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemonData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
