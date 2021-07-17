import { MUTATE, QUERY } from "../api";

export default {
  state: {
    userProfile: "",
    isLoggedIn: false,
    loading: false,
    
  },

  getters: {
    userProfile: (state) => state.applicant,    
  },

  mutations: {
    set: (state, { type, data }) => {
      const keys = Object.keys(state);
      for (let i = 0; i < keys.length; i++) {
        state[keys[i]] = keys[i] === type ? data : state[keys[i]];
      }
      return state;
    },

    resetDefault: (state, { value, type }) => {
      const keys = Object.keys(state);
      let data = keys.find((x) => {
        return x == value;
      });
      let object = state[data];
      let setAll = (obj, val) =>
        Object.keys(obj).forEach((k) => (obj[k] = val));
      setAll(object, type);
    },
  },

  actions: {
    mutate: ({ commit, dispatch }, { endpoint, data }) =>
      MUTATE(endpoint, data),

    setQuery: ({ commit, dispatch }, { endpoint, data }) =>
      QUERY(endpoint, data),

    query: ({ commit, dispatch }, { endpoint, payload, storeKey }) => {
      commit("set", {
        type: "loading",
        data: true,
      });
      return QUERY(endpoint, payload)
        .then((res) => {
          commit("set", {
            type: "loading",
            data: false,
          });
          commit("set", {
            type: storeKey,
            data: res,
          });
        })
        .catch((err) => {
          console.log(err, " The Error");
        });
    },
  },
};
