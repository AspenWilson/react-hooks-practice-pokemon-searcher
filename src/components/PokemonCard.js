import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const { id, name, hp, sprites } = pokemon
  const [isBack, setIsBack] = useState(false)

  function toggleFrontBack() {
    setIsBack((isBack) => !isBack)
  }
  return (
    <Card>
      <div onClick={toggleFrontBack}>
        <div className="image">
          {isBack ? (<img src={sprites.back} alt="oh no!" />) : (<img src={sprites.front} alt="oh no!" />)}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
