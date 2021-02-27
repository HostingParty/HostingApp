import React, { createContext, useReducer, useContext } from "react";
import { ADD_INVITE, REMOVE_INVITE, SET_USER, SET_EVENT, SET_SELECTED_EVENT, SET_RECIPES, ADD_RECIPE, PASS_DISH, DISH_VIEW } from "./actions";
import API from "./API"

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_INVITE:
      return {
        ...state,
        pendingInvites: [action.post, ...state.pendingInvites],
        loading: false,
      };

    case REMOVE_INVITE:
      return {
        ...state,
        pendingInvites: [...state.pendingInvites],
        loading: false,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case SET_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };
    case SET_RECIPES:
      return {
        ...state,
        recipeSearchArr: [...action.payload],
      };

    case PASS_DISH:
      return {
        ...state,
        dishType: action.payload.dishType,
      };

    case DISH_VIEW:
      return {
        ...state,
        searchedRecipe: action.payload,
      }

    case ADD_RECIPE:
      return {
      ...state,
      selectedEvent: action.payload,
    };
    
    default:
      return state;
  }
};

export async function searchRecipes(dishType) {
  let results = await API.getRecipes(dishType);
  let arr = results.data.results.map(item =>item.recipe);
  return arr;
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    selectedEvent: "",
    user: {
      name: {
        first: "",
        last: ""
      },
      allergies: [],
      preferences: [],
      favoriteRecipes: [],
      hosting: [],
      pending: [],
      accepted: [],
      declined: [],
      _id: "",
      phone: "",
      email: "",
      },
    event: {
      _id: null,
      title: "",
      description: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      pending: [],
      accepted: [],
      declined: [],
      apps: [], 
      sides: [],
      mains: [], 
    },
    loading: false,
    recipeSearchArr: [],
    searchedRecipe: {}
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
