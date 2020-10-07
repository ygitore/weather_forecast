import React, { Component } from 'react'

class SearchBar extends Component{
    state={term:''}
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" value={this.state.term} onChange={e=>this.setState({term:e.target.value})} />
            </form>
        )
    }
}

export default SearchBar
