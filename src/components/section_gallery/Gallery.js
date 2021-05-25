import React, { useState, Fragment } from 'react';
import CustomSelect from './CustomSelect';
import { terms } from '../../api/gallery-terms';
import axios from 'axios';
import { pixabayKey } from '../../api/pixabay';
import ImageResults from './ImageResults';
import Footer from '../components_footer/Footer';
import '../../css/style.css';

const Gallery = () => {
  const [formData, setFormData] = useState({
    searchTerm: {
      value: '',
      error: '',
    },
    apiURL: 'https://pixabay.com/api/',
    apiKey: pixabayKey,
  });

  const [imageCollection, setImageCollection] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();


    let errors = {};
    for(let key in formData) {
      if(formData[key].value === '') {
        errors[key] = 'Please select one option';
      }
    }

    if(Object.keys(errors).length === 0) {
      console.log(formData.searchTerm.value);
    } else {
      setFormData(prev => {
        let data = {};
        for(let key in errors) {
          data[key] = {
            ...prev[key],
            error: errors[key]
          }
        }
        return {
          ...prev,
          ...data
        }
      });
    }

    if (formData.searchTerm.value === '') {
      setImageCollection([])
    } else {
      axios
        .get(
          `${formData.apiURL}/?key=${formData.apiKey}&q=${formData.searchTerm.value}&image_type=photo`
        )
        .then(res => setImageCollection(res.data.hits))
        .then(console.log(imageCollection))
        .catch(err => console.log(err));
    }
  }

  const changeHandler = (value, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: {
        value,
        error: value !== '' ? '' : prev[name].error
      }
    }))
  }

  return (
    <Fragment>
      <div className="gallery">
        <header className="gallery__main-titles">
          <h1 className="gallery__title">Gallery</h1>
          <div className="pixabay-info">
            <h3 className="gallery__subtitle">Pictures from</h3><a href="https://pixabay.com/" className="pixabay-link"><img src="../images/pixabay-logo.png" alt="Pixabay" className="pixabay-image"/></a>
          </div>
          <h3 className="gallery__subtitle">Select term for searching pictures</h3>
        </header>
        <div className="gallery__content-container">
          <form className="gallery__form" onSubmit={submitHandler}>
            <CustomSelect
              label="Select term"
              searchPlaceholder="Search"
              data={terms}
              value={formData.searchTerm.value}
              onChange={changeHandler}
              error={formData.searchTerm.error}
              name="searchTerm"
            />
            <button className="gallery__btn-submit" type="submit">Search pictures</button>
          </form>
        </div>
        <br />
          {imageCollection.length > 0 ? (
            <ImageResults images={imageCollection} />
          ) : <p className="photo-error">Sorry, we couldn't find any pictures.</p>}
      </div>
      <Footer />
    </Fragment>
  );
}

export default Gallery

