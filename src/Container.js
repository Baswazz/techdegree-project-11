import React, { Component } from 'react';
import APIKey from './Config';
import axios from 'axios';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';

export default class Container extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = this.props.keyword) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state.photos);
    return (
      <div className="container">

        <SearchForm onSearch={this.performSearch} />

        <Navigation />

        <PhotoContainer data={this.state.photos} />

      </div>
    );
  }
}
