import React, { createContext, useReducer, useContext } from "react";
import { ADD_INVITE, REMOVE_INVITE, SET_USER, SET_SELECTED_EVENT, SEARCH_RECIPES } from "./actions";

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

    case SET_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        recipeSearchArr: searchRecipies(action.payload.dishType),
      };
    default:
      return state;
  }
};

function searchRecipies(dishType) {
  return //function call to api. return array of recipes
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    selectedEvent: "6025e9bba968960008f31a20",
    user: {
      
    },
    event: {
      details: {
        _id: 0,
        name: "State Event Thing",
        date: "2/16/2021",
        time: "noon",
        address: "101 NE 45th 981226",
        notes: "B there or b square.",
      },
      guestList: {
        pendingInvites: ["Dan", "Ben"], //will be array of User objects
        attendingInvites: ["Brandon"], //will be array of User objects
        maybeInvites: ["Maranda"], //will be array of User objects
        declinedInvites: ["BenTA"], //will be array of User objects
      },
      menu: {
        apps: ["Chips", "Dip", "Salsa"], //will be array of recipe objects
        sides: ["Green Salad", "Bread sticks"], //will be array of recipe objects
        mains: ["Turducken"], //will be array of recipe objects
      },
    },
    loading: false,
    recipeSearchArr: [], //array of recipe objects (from API)
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
