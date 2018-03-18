import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {
  const results = props.data;
  let photos = results.map(photo =>
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} />
  );

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
        {/* Not Found */}
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
      </ul>
    </div>
  );
}

export default PhotoContainer;
