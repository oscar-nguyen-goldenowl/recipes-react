import React, { Component, Fragment } from 'react';

class RecipeSearch extends Component {
    render() {
        const {value, handleSubmit, handleChange} = this.props;
        return (
            <Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                           <h1 className="text-slanted tex-capitalize">
                               search for recipe with 
                               <strong className="text-danger">Food2Fork</strong>
                           </h1>
                           <form className="mt-4" onSubmit={handleSubmit}>
                               <label htmlFor="search" className="text-capitalize">type recipe seperated bt comma</label>
                                <div className="input-group">
                                    <input value={value} onChange={handleChange} type="text" className="form-control" name="search" id="search" placeholder="chicken, onions, carrots"/>
                                    <div className="input-group-append">
                                        <button type="submit" className="input-group-text bg-primary text-white">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                           </form>
                       </div>
                   </div>
               </div>
            </Fragment>
        );
    }
}

export default RecipeSearch;