import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_COUNTRY_DETAIL = " GET_COUNTRY_DETAIL";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const FILTER_ABC = "FILTER_ABC";
export const FILTER_POPULATION = "FILTER_POPULATION";
export const FILTER_REGION = "FILTER_REGION";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";

export function getCountries() {
  return async function (dispatch) {
    var json = await axios.get(
      "https://countries-api-carolnavia.herokuapp.com/countries"
    );
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function searchByName(name) {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        `https://countries-api-carolnavia.herokuapp.com/countries/?name=${name}`
      );
      return dispatch({
        type: "SEARCH_NAME",
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    const response = await axios.get(
      "https://countries-api-carolnavia.herokuapp.com/activity"
    );
    dispatch({
      type: "GET_ACTIVITY",
      payload: response.data,
    });
  };
}

export function filterAbc(payload) {
  return {
    type: "FILTER_ABC",
    payload,
  };
}
export function filterPopulation(payload) {
  return {
    type: "FILTER_POPULATION",
    payload,
  };
}

export function filterRegion(payload) {
  return {
    type: "FILTER_REGION",
    payload,
  };
}

export function filterActivities(payload) {
  return {
    type: "FILTER_ACTIVITIES",
    payload,
  };
}
