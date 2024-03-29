import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track
          key={track.id}
          track={track}
          isRemoval={this.props.isRemoval}
          onRemove={this.props.onRemove}
          onAdd={this.props.onAdd}/>
        })}
      </div>
    );
  }
}

export default TrackList;