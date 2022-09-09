import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Details from "./Details";
import { useState } from "react";

export default function Pokemonthumb({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) {
  const [show, setShow] = useState(false);
  const style = `thumb-container ${type}`;
  return (
    <div>
      <Card className={style}>
        <Card.Body>
          {show === true ? (
            <Details
            weightpok={weight}
            heightpok={height}
            pokstat1={stat1}
            pokstat2={stat2}
            pokstat3={stat3}
            pokstat4={stat4}
            pokstat5={stat5}
            pokstat6={stat6}
            posbs1={bs1}
            posbs2={bs2}
            posbs3={bs3}
            posbs4={bs4}
            posbs5={bs5}
            posbs6={bs6}
            />
            ) : (
              <>
              <Card.Img variant="top" src={image} height={200} />
              <Card.Title>{name.toUpperCase()}</Card.Title>
              <Card.Text>
                <small>Type: {type}</small>
              </Card.Text>
            </>
          )}
          <Button className=" btn-outline-dark" onClick={() => setShow(!show)}>
            {show === true ? "Know less..." : "Know more..."}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
