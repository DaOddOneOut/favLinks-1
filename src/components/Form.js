import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        //TODO - set initial state for link name and URL 
        this.state = {name:'', URL:''}
        
    }

    handleChange = event => {
        //TODO - Logic for changing state based on form changes
        this.setState({
            name:event.target.value
        })
    }

    handleChangeURL = event =>{
        /* Had to make a separate handleChange for URL due to 
        OG handleChange not working for both Name and URL simultaneously */
        this.setState({
            URL:event.target.value
        })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        //TODO - Logic for calling props to handle submission and setting state changes
        let anotherLink = {name: this.state.name, URL: this.state.URL};
        this.props.newEntry(anotherLink);

    }

    render() {
        
        /* TODO - Logic for returning a form element with labels and inputs for link name and URL */
        return(
            <form>
            <label for="link">Name : </label>
            <input type="text" id="link" onChange={(event) =>this.handleChange(event)}/>      
            <label for="url">URL : </label>
            <input type="text" id="url" onChange={(event) =>this.handleChange(event)}/>
            <br></br>
            <button type="submit" onClick={this.onFormSubmit}>Submit</button>
        </form>
        )
    
    }
}

export default Form;

