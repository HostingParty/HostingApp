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
        recipeSearchArr: searchRecipes(action.payload.dishType),
      };
    default:
      return state;
  }
};

function searchRecipes(dishType) {
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
        mains: [
          {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b2e0224c6d3bc3b49e381c45c2385f03",
            "label": "Pesto Pizza",
            "image": "https://www.edamam.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2.jpg",
            "source": "Food52",
            "url": "https://food52.com/recipes/5156-pesto-pizza",
            "shareAs": "http://www.edamam.com/recipe/pesto-pizza-b2e0224c6d3bc3b49e381c45c2385f03/pizza/peanut-free/low-carb",
            "ingredientLines": [
                "6 strips hickory smoked bacon",
                "2 medium sized italian sausages",
                "3 cups fresh mozzarella cheese",
                "1 clove of garlic/crushed",
                "1 medium size white onion/chopped",
                "2 balls of fresh pizza dough",
                "1 jar of 365 Everyday pesto sauce",
                "1 jar sliced and drained black olives"
            ]
          }
        ], //will be array of recipe objects
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
