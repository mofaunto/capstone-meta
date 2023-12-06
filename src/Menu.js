import bruchetta from "./icons_assets/bruchetta.svg";
import salad from "./icons_assets/greek salad.jpg";
import dessert from "./icons_assets/lemon dessert.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Menu = () => {
  return (
    <>
      <div className="specials">
        <div className="specials-head">
          <h3>Specials</h3>
          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={salad} />
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
              Our great greek salad with our famous lemon sauce
            </Card.Text>
            <Button variant="primary">Order Online</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bruchetta} />
          <Card.Body>
            <Card.Title>Bruchetta</Card.Title>
            <Card.Text>
              Our great greek salad with our famous lemon sauce
            </Card.Text>
            <Button variant="primary">Order Online</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dessert} />
          <Card.Body>
            <Card.Title>Lemon Dessert</Card.Title>
            <Card.Text>
              Our great greek salad with our famous lemon sauce
            </Card.Text>
            <Button variant="primary">Order Online</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Menu;
