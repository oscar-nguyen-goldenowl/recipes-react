import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import {recipe} from '../tempDetails';
class RecipeDetail extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         recipe: recipe,
    //         url: `https://www.food2fork.com/api/get?key=129b80a7dd22d75a906e7890fdc7b7ca&rId=${this.props.id}`
    //     }
    // }


    // async componentDidMount(){
    //     try{
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState({
    //             recipe: jsonData.recipe
    //         });
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    state = {
        recipe: recipe
    }
    async componentDidMount(){
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=129b80a7dd22d75a906e7890fdc7b7ca&rId=${id}`;
        try{
            const data = await fetch(url);
            const jsonData = await data.json();
            this.setState(
                (state, props) => {
                    return {recipe: jsonData.recipe}
                },
                () => {}
            );
        }catch(error){
            console.log(error);
        }
    }
    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;
        const {handleIndex} = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            {/* Link in here */}
                            <button onClick={() => handleIndex(1)} type="button" className="btn btn-warning mb-5 text-capitalize">back to recipe list</button>
                            <img src={image_url} className="b-lock w-100" alt="recipe"/>
                        </div>
                        {/* details */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="tex-warning text-capitalize text-warning text-slanted">provided by {publisher}</h6>
                            <a href={publisher_url} className="btn btn-primary mt-2 tex-capitalize" rel="noopener noreferrer" target="_blank">publisher webpage</a>
                            <a href={source_url} className="btn btn-success mt-2 mx-3 tex-capitalize" rel="noopener noreferrer" target="_blank">recipe url</a>
                            <ul className="list-group mt-4">
                                <h4 className="mt-3 mb-4">Ingredients</h4>
                                {
                                    ingredients.map((item, index) => {
                                        return (
                                            <li key={index} className="list-group-item text-slanted">{item}</li>
                                        )
                                    })
                                }
                            </ul>               
                        </div>
                        {/* end of details */}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RecipeDetail;