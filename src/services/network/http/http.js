import axios from "axios";
import HTTP_CONSTANTS from "../../../constants/http/index";

class HttpService {
  constructor(baseURL = "https://api.example.com") {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  makeRequest = async (
    method,
    url,
    data = null,
    params = null,
    headers = {}
  ) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const source = axios.CancelToken.source();

    try {
      const response = await this.axiosInstance.request({
        method,
        url,
        data,
        params,
        headers,
        signal,
        cancelToken: source.token,
      });

      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else if (error.response && error.response.status) {
        const status = error.response.status;
        const errorMessage = HTTP_CONSTANTS.STATUS_CODES[status]
          ? `Error: ${HTTP_CONSTANTS.STATUS_CODES[status]}`
          : `Request failed with status code ${status}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      } else {
        console.error("Request error:", error);
        throw error;
      }
    } finally {
      controller.abort();
      source.cancel("Operation canceled by the user.");
    }
  };

  get = (url, params = null, headers = {}) =>
    this.makeRequest(
      HTTP_CONSTANTS.REQUEST_TYPE.GET,
      url,
      null,
      params,
      headers
    );

  post = (url, data, headers = {}) =>
    this.makeRequest(
      HTTP_CONSTANTS.REQUEST_TYPE.POST,
      url,
      data,
      null,
      headers
    );

  put = (url, data, headers = {}) =>
    this.makeRequest(HTTP_CONSTANTS.REQUEST_TYPE.PUT, url, data, null, headers);

  patch = (url, data, headers = {}) =>
    this.makeRequest(
      HTTP_CONSTANTS.REQUEST_TYPE.PATCH,
      url,
      data,
      null,
      headers
    );

  delete = (url, headers = {}) =>
    this.makeRequest(
      HTTP_CONSTANTS.REQUEST_TYPE.DELETE,
      url,
      null,
      null,
      headers
    );
}

export default HttpService;
