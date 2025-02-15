import React, { useState } from "react";
import axios from "axios";
import Preloader from "../../components/Preloader/Preloader";
import Select from "../../components/Select/Select";
import HttpService from "../../services/network/http/http";
import { searchTerms } from "../../data/searchTerms";
import { API_URL_IMAGES } from "../../api/url";
import CONFIG from "../../config/config";
import { galleryHeaderData } from "../../data/headers";
import Header from "../../components/common/Header/Header";
import Images from "../Images/Images";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/common/Button/Button";

const Gallery = () => {
  const isLocal = process.env.NODE_ENV === "development";
  const API_URL = process.env.REACT_APP_API_URL || API_URL_IMAGES;
  const API_KEY = process.env.REACT_APP_PIXABAY_KEY || CONFIG.PIXABAY_KEY;

  const [inputData, setInputData] = useState({
    searchTerm: { value: "", error: "" },
    apiURL: API_URL,
    apiKey: API_KEY,
  });

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    let errors = {};
    for (let key in inputData) {
      if (inputData[key].value === "") {
        errors[key] = "Please select one option";
      }
    }

    if (Object.keys(errors).length) {
      setInputData((prev) => {
        let data = {};
        for (let key in errors) {
          data[key] = { ...prev[key], error: errors[key] };
        }
        return { ...prev, ...data };
      });
      return;
    }

    if (inputData.searchTerm.value === "") {
      setImages([]);
      return;
    }

    const apiURL = `${inputData.apiURL}/?key=${inputData.apiKey}&q=${inputData.searchTerm.value}&image_type=photo`;

    setIsLoading(true);
    setError(null);

    try {
      let res;
      if (isLocal) {
        const httpService = new HttpService(inputData.apiURL);
        res = await httpService.get(apiURL);
      } else {
        res = await axios.get(apiURL);
      }

      if (isLocal) {
        if (res.hits) {
          setImages(res.hits);
        }

        if (!res.hits.length) {
          setError("No data");
        }
      }

      if (!isLocal) {
        if (res.data.hits) {
          setImages(res.data.hits);
        }
        if (!res.data.hits.length) {
          setError("No data");
        }
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const changeHandler = (value, name) => {
    setInputData((prev) => ({
      ...prev,
      [name]: { value, error: value !== "" ? "" : prev[name].error },
    }));
  };

  return (
    <>
      <div className="wrapper">
        <div className="gallery-container">
          <Header headerData={galleryHeaderData} />
          <div className="gallery-controls">
            <form className="gallery-dropdown">
              <Select
                label="Select term"
                searchPlaceholder="Search"
                data={searchTerms}
                value={inputData.searchTerm.value}
                onChange={changeHandler}
                error={inputData.searchTerm.error}
                name="searchTerm"
              />
            </form>
            <Button
              name="Search"
              className="button"
              type="submit"
              handler={submitHandler}
              disabled={isLoading}
            />
          </div>
          {isLoading && <Preloader />}
          {error && <div className="error-message">{error}</div>}
          {!isLoading && !error && images.length > 0 && (
            <Images images={images} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
