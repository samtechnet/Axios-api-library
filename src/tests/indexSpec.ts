import { stringify } from "querystring";
import  countries  from "../index";

describe("fetch countries using axios", () => {
    it('should fetch all countries', async () => {
        const result = await countries.getCountries();
        expect(result.length).toEqual(250);
        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Array);
        
        
    })

    it('should fetch the country peru data', async () => {
        const result = await countries.getCountriesByName();
        expect(result.length).toEqual(1);
        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Array);
        expect(result.independent).toBeUndefined();
    })

    it('should fetch all countries by region', async () => {
        const result = await countries.getCountriesByRegion();
        const date = await countries.getCountriesByRegion();
        expect(result.length).toEqual(53);
        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Array);
        
        
    })

    // fit('should fetch all countries by continent', async () => {
    //     const result = await countries.getCountriesByContinent();
    //     const date = await countries.getCountriesByContinent();
    //     //expect(result.length).toEqual('');
    //     expect(result).toBeDefined();
    //     expect(result).toBeInstanceOf(Array);
    //     //expect(date).toEqual(Date);
        
        
    // })
})