import React from "react";
import Background from "./background";
import axios from "axios";
import FormData from "form-data";
export default class NewDrink extends React.Component {
  constructor() {
    super();
    this.state = {
      price: '',
      image: '',
      drinkTitle: '',
      description: '',
      drinkType: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.fileInputRef = React.createRef();
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name] : value});
  }

  onFileChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = event => this.setState({image:event.target.result});
    reader.readAsDataURL(file);
    this.setState({file});
  }


  handleSubmit(event) {
    event.preventDefault();
    this.addDrink();
  }

  addDrink() {
    event.preventDefault();
    const formData = new FormData;
    formData.append('price', this.state.price);
    formData.append('drinkTitle', this.state.drinkTitle);
    formData.append('description', this.state.description);
    formData.append('drinkType', this.state.drinkType);
    formData.append('image', this.fileInputRef.current.files[0]);
    axios.post('http://localhost:8888/boba-shop/index.php', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error submitting the form:', error);
        console.log('server response:', error.response);
      })
    console.log(this.state);
  }

  render() {
    return (
      <>
      <Background/>
      <section>
        <div className="form-container">
          <div className="form">
            <div className="form-holder">
              <div className="form-title">
                <h2>welcome admin please add a drink</h2>
              </div>
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <div>
                  <label htmlFor="drink-type">Drink Type</label>
                </div>
                <div>
                  <input type="text" name="drinkType" placeholder="name of a drink" id="drink-type" onChange={this.handleChange} value={this.state.drinkType} required/>
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                </div>
                <div>
                    <input type="text" name="price" placeholder="Price" id="price" onChange={this.handleChange} value={this.state.price} required />
                </div>
                <div>
                  <label htmlFor="drinkTitle">Drink Title</label>
                </div>
                <div>
                    <input type="text" name="drinkTitle" placeholder="drink title" id="drink-title" onChange={this.handleChange} value={this.state.drinkTitle} required />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                </div>
                <div>
                  <textarea name="description" id="description" cols="30" rows="10" onChange={this.handleChange} value={this.state.drinkDescription}></textarea>
                </div>
                <div>
                  <label htmlFor="image">image</label>
                </div>
                <div>
                  <input type="file" name="image" id="image" onChange={this.onFileChange} ref={this.fileInputRef}/>
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
    );
  }
}
