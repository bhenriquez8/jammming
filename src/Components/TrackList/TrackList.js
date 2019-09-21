import React from 'react';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track key={track.id} track={track}/>
        })}
      </div>
    );
  }
}

export default TrackList;