import bruchetta from "../../icons_assets/bruchetta.svg";
import salad from "../../icons_assets/greek salad.jpg";
import dessert from "../../icons_assets/lemon dessert.jpg";
import Card from "../Card/Card";
import "./Menu.css";

const Menu = () => {
  const cardMenu = [
    {
      id: 100,
      image: salad,
      title: "Greek Salad",
      price: "$12.99",
      description: "Our great greek salad with our famous lemon sauce",
      order: "Order for delivery",
    },
    {
      id: 101,
      image: bruchetta,
      title: "Bruschetta",
      price: "$5.99",
      description: "Our Bruchetta is grilled perfectly for an evening dinner.",
      order: "Order for delivery",
    },
    {
      id: 102,
      image: dessert,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from Grandma's recipe book!",
      order: "Order for delivery",
    },
  ];

  return (
    <div className="feature-menu-container">
      <div className="feature-menu-wrapper global-max-width">
        <div className="feature-menu-top">
          <h3 className="feature-menu-top-title">Our specials!</h3>

          <button className="feature-menu-top-button">Online Menu</button>
        </div>

        <article className="feature-menu-bottom">
          {cardMenu.map((item) => {
            const { image, title, price, description, order, id } = item;
            return (
              <Card
                key={id}
                image={image}
                title={title}
                price={price}
                description={description}
                order={order}
              />
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default Menu;
