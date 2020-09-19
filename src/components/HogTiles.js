import React from 'react';
import Hog from './Hog'

class HogTiles extends React.Component {
    render() {
        return (
            <div className="ui grid container">

                {this.props.hogs.map(hog => <Hog hog={hog} key={hog.name} handleClickToRemove={this.props.handleClickToRemove} />)}

            </div>)
    }

}

export default HogTiles