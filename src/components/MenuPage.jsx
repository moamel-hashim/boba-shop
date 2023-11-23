import React from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8889';

export default class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      toppings: [],
    }
    this.getDrinks = this.getDrinks.bind(this);
    this.getToppings = this.getToppings.bind(this);
  }

  componentDidMount() {
    this.getDrinks();
    this.getToppings();
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

  getToppings() {
    axios.get("/boba-shop/topping.php")
    .then((response) => {
      console.log(response.data);
      this.setState({toppings: response.data});
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    });
  }

  render() {
    const {drinks, toppings} = this.state;
    console.log('value of drinks in render:',toppings);
    return(
      <main>
        <section>
          <div className="menuTitle">
            <h3>Our</h3>
            <h3>Menu</h3>
          </div>
        </section>
        <section>
          <div className="text-align-center">
            <div className="image-container text-align-center">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/002/909/353/small/bubble-milk-tea-special-promotions-design-boba-milk-tea-pearl-milk-tea-yummy-drinks-coffees-and-soft-drinks-with-logo-and-cute-funny-doodle-style-advertisement-banner-illustration-vector.jpg" alt="an art image of boba drinks" />
            </div>
          </div>
        </section>
        <section>
          <div className="drinks-title">
            <h4>Drinks</h4> <br />
            <p>Our signature World class drinks</p>
          </div>
          <div className="drinks-container">
            {drinks.map((drink) => (
              <div key={drink.drink_id} className="drinks-card">
                <div className="drinks">
              <img src={`http://localhost:8889/boba-shop/${drink.drink_image_path}`} alt={ drink.drink_title } /> <br />
              <h5>{drink.drink_title}</h5> <br />
              <p>{drink.drink_description}</p> <br />
              <p>${drink.price}</p>
                </div>
            </div>
              ))}
          </div>
          <div className="topping-title">
            <h4>Toppings</h4> <br />
            <p>Enjoy our verity of toppings</p>
          </div>
          <div className="topping-container">
            {toppings.map((topping) => (
              <div key={topping.topping_id} className="topping-card">
                <div className="toppings">
                <img src={`http://localhost:8889/boba-shop/${topping.topping_image_path}`} alt={topping.topping_name} />
                <h5>{topping.topping_name}</h5> <br />
                <p>${topping.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    )
  }
}
