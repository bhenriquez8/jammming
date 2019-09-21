import React from 'react';
import './Track.css';

class Track extends React.Component {
  renderAction() {
    return this.props.isRemoval ? '-' : '+';
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name will go here</h3>
          <p>Track Artist will go here | Track Album here</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;