import axios from "axios";

async function getCountries() {
    try {
      const response = await axios.get('https://restcountries.com/v2/all')
      return response.data
    } catch (error) {
      console.error(error);
    }
}


async function getCountriesByName() {
  try {
    const response = await axios.get('https://restcountries.com/v2/name/peru')
    return response.data
  } catch (error) {
    console.error(error);
  }
}

async function getCountriesByRegion() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/region/europe')
    return response.data
  } catch (error) {
    console.error(error);
  }
}

// async function getCountriesByContinent() {
//   try {
//     const response = await axios.get('https://restcountries.com/v2/continent/europe')
//     console.log(response);
//     //return response.data
//   } catch (error) {
//     console.error(error);
//   }
// }



getCountries()
getCountriesByName()
getCountriesByRegion()
//getCountriesByContinent()
export default {
  getCountries,
  getCountriesByName,
  getCountriesByRegion,
  //getCountriesByContinent,
}