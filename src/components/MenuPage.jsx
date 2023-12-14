import React from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8889';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      toppings: [],
      modelShown: false,
    }
    this.getDrinks = this.getDrinks.bind(this);
    this.getToppings = this.getToppings.bind(this);
    this.handleEditDrink = this.handleDeleteDrink.bind(this);
    this.handleEditTopping = this.handleEditDrink.bind(this);
    this.handleDeleteTopping = this.handleDeleteTopping.bind(this);
    this.handleEditTopping = this.handleEditTopping.bind(this);
  }
  componentDidMount() {
    this.getDrinks();
    this.getToppings();
  }

  handleEditDrink(drinkId) {
    const history = useHistory();
    history.push('/edit-drink');
  };

  handleDeleteDrink(drinkId) {
    const parsedDrinkId = Number(parseInt(drinkId));
    console.log(parsedDrinkId);
    axios.delete(`/boba-shop/drink.php`, {
      data: {drink_id: parsedDrinkId},
    })
    .then((response) => {
      alert('Drink deleted successfully');
      this.getDrinks();
    })
    .catch((error) => {
      console.error('Error deleting drink:', error);
    });
  };

  handleEditTopping(toppingId) {
    console.log(`Edit topping with ID: ${toppingId}`);
  };
  handleDeleteTopping (toppingId) {
    const parsedToppingId = Number(parseInt(toppingId))
    axios.delete(`/boba-shop/topping.php`, {
      data: {topping_id: parsedToppingId}
    })
    .then((Response) => {
      alert('Topping deleted successfully');
      this.getToppings();
    })
    .catch ((error) => {
      console.error('Error deleting topping:', error);
    })
  }
  getDrinks() {
    axios.get("/boba-shop/drink.php")
      .then((response) => {
        this.setState({ drinks: response.data });
      })
      .catch((error) => {
        console.error('Error fetching drinks:', error);
      });
  }

  getToppings() {
    axios.get("/boba-shop/topping.php")
      .then((response) => {
        this.setState({ toppings: response.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      });
  }

  render() {
    const { drinks, toppings } = this.state;
    console.log(drinks);
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
                    <div className="icon-container">
                      <div className="gear" onClick={() => this.handleEditDrink(drink.drink_id)}>
                        <FontAwesomeIcon icon={faGear} />
                      </div>
                      <div className="trash" onClick={() => this.handleDeleteDrink(drink.drink_id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </div>
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
                    <div className="icon-container">
                      <div className="gear" onClick={() => this.handleEditTopping(topping.topping_id)}>
                        <FontAwesomeIcon icon={faGear}/>
                      </div>
                      <div className="trash" onClick={() => this.handleDeleteTopping(topping.topping_id)}>
                        <FontAwesomeIcon icon={faTrash}/>
                      </div>
                    </div>
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
