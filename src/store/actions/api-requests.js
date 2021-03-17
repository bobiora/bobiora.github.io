import axios from "axios";
const BASE_URL = "https://bobiora.github.io";
export default {  
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios.get(`${BASE_URL}/db.json`)
      .then(response => {
        commit("SET_PRODUCTS", response.data.products);
        return response;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }
};
