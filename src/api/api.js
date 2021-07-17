import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import store from "../store/index";
import router from "../router";

import { useToast } from "vue-toastification";
const toast = useToast();

export const AUTH_CONTEXT = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : "";
};

export const logout = () => {
  localStorage.removeItem("token");

  store.commit("set", {
    type: "isLoggedIn",
    data: false,
  });
  store.commit("set", {
    type: "userProfile",
    data: "",
  });

  // *Note: Just decided later on to clear local storage due to occasional version conflicts:
  window.localStorage.clear("vuex");

  router.push("/login");
};

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError } = errors;
  if (graphQLErrors && graphQLErrors.length > 0) {
    let e = graphQLErrors[0];
    console.log(e.message, "e.message");
    toast.error(e.message)
  }

  if (
    networkError ==
    "ServerError: Response not successful: Received status code 401"
  ) {
    toast.error(`${networkError}, Logging User Out`)
    logout();
  }
});

function getService(link) {
  const API = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });

  return API;
}

var httplink = createHttpLink({
    // uri: `http://localhost:3000/graphql`,
    uri: `https://wegonetwork-middleware.herokuapp.com/graphql`,
    // fetchOptions: {
    //     mode: 'no-cors',
    // },
});
const link = errorLink.concat(httplink);

export const API = getService(link);