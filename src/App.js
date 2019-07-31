import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./App.css";
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=129b80a7dd22d75a906e7890fdc7b7ca",
    base_url: "https://www.food2fork.com/api/search?key=129b80a7dd22d75a906e7890fdc7b7ca",
    detail_id: 35389,
    pageIndex: 1,
    search: "",
    query: '&q=',
    error: ""
  }

  async getRepices(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
        console.log(jsonData);      
        if(jsonData.recipes.length === 0){
          this.setState(() => {
            return {error: "Sorry !"}
          });
        }  
        else{
          this.setState(() => {
            return {error: "", recipes: jsonData.recipes}
          });
        }
      // this.setState({
      //   recipes: jsonData.recipes
      // });
    }catch(error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.getRepices();
  }

  displayPage = (index) => {
    switch(index){
      default:
      case 1: 
        return <RecipeList 
                          recipes={this.state.recipes} 
                          handleDetails={this.handleDetails}
                          value={this.state.search}
                          handleChange={this.handleChange}
                          handleSubmit={this.handleSubmit}
                          error={this.state.error}
                />
      case 0:
        return <RecipeDetail 
                          id={this.state.detail_id} 
                          handleIndex={this.handleIndex}
                />
    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  }
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      detail_id: id
    });
  }
  handleChange = (e) => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
        console.log(this.state.search);
      }
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('handle submit');
    
    const {base_url, query, search} = this.state;
    this.setState(
      () => {
        return {url: `${base_url}${query}${search}`, search:""}
      },
      () => {this.getRepices()}
    );
  }

  render() {
    return (
     <Fragment>
       {/* Router tag in here */}
        {/* Route tag in here */}
          {/* replace displayPage equal tag Route */}
          {this.displayPage(this.state.pageIndex)}
        {/* Route tag in here */}
       {/* Router tag in here */}
     </Fragment>
    );
  }
}

export default App;
