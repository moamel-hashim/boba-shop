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
        this.setState({ toppings: response.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      });
  }

  render() {
    const { drinks, toppings } = this.state;
    console.log('value of drinks in render:', toppings);
    return (
      <main>
        <section className="container">
          <div className="drinks-title">
            <h4>Drinks</h4>
          </div>
          <div className="drinks-container">
            <div className="lower-container">
              {drinks.map((drink) => (
                <div key={drink.drink_id} className="drinks-card">
                  <div className="drinks">
                    <img src={`http://localhost:8889/boba-shop/${drink.drink_image_path}`} alt={drink.drink_title} /> <br />
                    <h5>{drink.drink_title}</h5> <br />
                    <p>{drink.drink_description}</p> <br />
                    <p>${drink.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="topping-title">
            <h4>Toppings</h4>
          </div>
          <div className="topping-container">
            <div className="lower-container">
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
          </div>
        </section>
      </main>
    )
  }
}
