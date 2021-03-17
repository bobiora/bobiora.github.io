import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios.get("https://bobiora.github.io/db.json")
      .then(products => {
        commit("SET_PRODUCTS", products.data.products);
        return products;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }
};
