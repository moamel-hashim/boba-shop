import React from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8888';

export default class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
    }
    this.getDrinks = this.getDrinks.bind(this);
  }

  componentDidMount() {
    this.getDrinks();
  }

  getDrinks() {
    axios.get("/boba-shop/drink.php")
    .then((response) => {
      console.log(response.data);
      this.setState({ drinks: response.data });
    })
    .catch((error) => {
      console.error('Error fetching drinks:', error);
    });
  }

  render() {
    const {drinks} = this.state;
    console.log('value of drinks in render:',drinks);
    return(
      <main>
        <section>
          <div className="menuTitle">
            <h3>Our</h3>
            <h3>Menu</h3>
          </div>
        </section>
        <section>
          <div className="series">
            <h4>Series</h4>
          </div>
          <div className="text-align-center">
            <div className="image-container text-align-center">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/002/909/353/small/bubble-milk-tea-special-promotions-design-boba-milk-tea-pearl-milk-tea-yummy-drinks-coffees-and-soft-drinks-with-logo-and-cute-funny-doodle-style-advertisement-banner-illustration-vector.jpg" alt="an art image of boba drinks" />
            </div>
          </div>
        </section>
        <section>
          <div className="drinks-title">
            <h4>blended series</h4> <br />
            <p>Our signature yogurt series & snow series. contains Dairy</p>
          </div>
          <div className="drinks-container">
            {drinks.map((drink) => (
              <div key={drink.drink_id} className="drinks">
              <img src={`http://localhost:8888/boba-shop/${drink.drink_image_path}`} alt={ drink.drink_title } /> <br />
              <h5>{drink.drink_title}</h5> <br />
              <p>{drink.drink_description}</p> <br />
              <p>${drink.price}</p>
            </div>
              ))}
          </div>
        </section>
      </main>
    )
  }
}
