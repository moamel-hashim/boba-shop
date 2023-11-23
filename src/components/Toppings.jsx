import Navbar from "./Navbar";
import Background from "./background";
import React, {useState, useRef} from "react";
import axios from "axios";
import FormData from "form-data";
import {useHistory, Link} from "react-router-dom/cjs/react-router-dom.min";
axios.defaults.baseURL = 'http://localhost:8889';

export default function Toppings () {
  const [state, setState] = useState({
      price: "",
      image: "",
      toppingTitle: "",
  });
      const history = useHistory();
      const fileInputRef = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({...state, [name]: value });
  };

  const onFileChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = (event) => setState({...state, image: event.target.result, file: file });
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDrink();
  };

  const addDrink = () => {
    const formData = new FormData();
    formData.append("price", state.price);
    formData.append("toppingTitle", state.toppingTitle);
    formData.append("image", state.file);

      axios
      .post("/boba-shop/topping.php", formData)
      .then((response) => {
        console.log(response.data);
      history.push('/menu');
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
        console.log('server response:', error.response);
      });

      console.log('value of state:',state);
  };

      return (
      <>
        <Background />
        <Navbar/>
        <section>
          <div className="form-container">
            <div className="form">
              <div className="form-holder">
                <div className="form-links">
                  <Link to="/admin">Drinks</Link>
                  <Link to="/toppings">Toppings</Link>
                </div>
                <div className="form-title">
                  <h2>welcome admin please add a drink</h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  encType="multipart/form-data">
                  <div>
                    <label htmlFor="toppingTitle">Drink Title</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="toppingTitle"
                      placeholder="Topping title"
                      id="toppingTitle"
                      onChange={handleChange}
                      value={state.toppingTitle}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="price">Price</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      id="price"
                      onChange={handleChange}
                      value={state.price}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="image">image</label>
                  </div>
                  <div>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={onFileChange}
                      ref={fileInputRef}
                    />
                  </div>
                  <div>
                    <button>save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
      )
}
