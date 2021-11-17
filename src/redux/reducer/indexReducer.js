import {
  GET_COUNTRIES,
  SEARCH_NAME,
  GET_COUNTRY_DETAIL,
  GET_ACTIVITY,
  FILTER_ABC,
  FILTER_POPULATION,
  FILTER_REGION,
  POST_ACTIVITY,
  FILTER_ACTIVITIES,
} from "../actions/indexActiones";

const incialState = {
  countries: [],
  allCountries: [],
  countryDetail: null,
  allActivities: [],
  activity: [],
};

function rootReducer(state = incialState, action) {
  switch (action.type) {
    case GET_COUNTRIES: // en mi estado countries q en principio es [], guardame todas las acciones q te mande GETCOUNTRIES
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case SEARCH_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        allActivities: action.payload,
      };

    case FILTER_ABC:
      action.payload === "A to Z"
        ? state.countries.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
          })
        : state.countries.sort((a, b) => {
            if (a.name > b.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
          });

      return {
        ...state,
        countries: [...state.countries],
      };
    case FILTER_POPULATION: {
      let orderPopulation =
        action.payload === "high"
          ? state.countries.sort((a, b) => {
              if (a.population > b.population) return 1;
              if (b.population > a.population) return -1;
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.population > b.population) return -1;
              if (b.population > a.population) return 1;
              return 0;
            });

      return {
        ...state,
        countries: [...orderPopulation],
      };
    }
    case FILTER_REGION: {
      const regionCountry =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter((el) => {
              return el.continent === action.payload;
            });

      return {
        ...state,
        countries: regionCountry,
      };
    }

    case POST_ACTIVITY: {
      return {
        ...state,
      };
    }

    case FILTER_ACTIVITIES:
      let countriesFilterByActivities =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter((el) => {
              let aux1 = el.activities;
              for (let j of aux1) {
                if (j.name === action.payload) return true;
              }
              return false;
            });
      if (countriesFilterByActivities.length === 0) {
        alert(`No ${action.payload} Activity found`);
        countriesFilterByActivities = state.countries;
      }
      return {
        ...state,
        countries: countriesFilterByActivities,
      };

    default:
      return state;
  }
}

export default rootReducer;
