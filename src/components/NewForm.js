import React, { Component } from 'react'
import './Form.css'

export default class NewForm extends Component {

    state = {
            image: '',
            name: '',
            date: '',
            cause: '',
            location: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDeath(this.state)
    }

    render(){
        return(
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <label for='name'>Name: </label>
                    <input name='name' value={this.state.name} onChange={this.handleChange}/>
                
                    <label for='image'>Image Url: </label>
                    <input name='image' value={this.state.image} onChange={this.handleChange}/>
                    
                    <label for='date'>Date: </label>
                    <input name='date' value={this.state.date} onChange={this.handleChange}/>
                    
                    <label for='cause'>Cause: </label>
                    <input name='cause' value={this.state.cause} onChange={this.handleChange}/>
                    
                    <label for='location'>Location: </label>
                    <input name='location' value={this.state.location} onChange={this.handleChange}/>
​
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}