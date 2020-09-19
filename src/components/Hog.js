import React from 'react';
import HogDetails from './HogDetails'

class Hog extends React.Component {


    state = {
        details: false
    }

    handleClick = () => {
        this.setState({ details: !this.state.details })
    }
    render() {
        return (
            <div>
                <div className="ui eight wide column ui card">
                    <h2> {this.props.hog.name}</h2>
                    <img src={require(`../hog-imgs/${this.props.hog.name.replace(/ /g, "_").toLowerCase()}.jpg`)} />
                    <div></div>
                    <button className="ui button" onClick={this.handleClick}> Details </button>
                    <button className="ui button" onClick={() => { this.props.handleClickToRemove(this.props.hog) }}> Remove Hog </button>
                    {this.state.details ? <HogDetails hog={this.props.hog} /> : null}
                </div>
            </div>
        )
    }

}

export default Hog

