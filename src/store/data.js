import { MUTATE, QUERY } from "../api";

export default {
  state: {
    userProfile: "",
    isLoggedIn: false,
    loading: false,

    movies: [
      {
        image: "https://wegonetwork.s3.eu-west-2.amazonaws.com/banners/starwars.jpg",
        title: "Star wars",
        time: "1 minute ago",
        views: "29,129",
        id: 1,
      },
      {
        image: "https://wegonetwork.s3.eu-west-2.amazonaws.com/banners/starwars.jpg",
        title: "Star wars",
        time: "2 minutes ago",
        views: "129,192",
        id: 2,
      },
      {
        image: "https://wegonetwork.s3.eu-west-2.amazonaws.com/banners/starwars.jpg",
        title: "Star wars",
        time: "1 day ago",
        views: "40,000",
        id: 3,
      },
      {
        image: "https://wegonetwork.s3.eu-west-2.amazonaws.com/banners/starwars.jpg",
        title: "Star wars",
        time: "3 days ago",
        views: "250,000",
        id: 4,
      },
      {
        image: "https://wegonetwork.s3.eu-west-2.amazonaws.com/banners/starwars.jpg",
        title: "Star wars",
        time: "6 days ago",
        views: "450,000",
        id: 5,
      },
      {
        image: "https://wegonetwork.s3.eu-west-2.amazonaws.com/banners/starwars.jpg",
        title: "Star wars",
        time: "1 week ago",
        views: "500,000",
        id: 6,
      },
    ],
    
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
