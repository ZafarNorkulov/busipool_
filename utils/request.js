import { BASE_URL } from "@/utils/url";

export const getCities = async () => {
    try {
        if (!BASE_URL) return console.log("BASE_URL is not defined");

        const response = await fetch(`${BASE_URL}/project/city/realization/`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const cities = await response.json()

        return cities
    } catch (error) {
        return error

    }
};
export const getProjectTypes = async () => {
    try {
        if (!BASE_URL) return console.log("BASE_URL is not defined");

        const response = await fetch(`${BASE_URL}/project/type/business/`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const cities = await response.json()

        return cities
    } catch (error) {
        return error

    }
};
export const getCounterparty = async () => {
    try {
        if (!BASE_URL) return console.log("BASE_URL is not defined");

        const response = await fetch(`${BASE_URL}/project/counterparty/`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const cities = await response.json()

        return cities
    } catch (error) {
        return error

    }
};
export const getCategory = async () => {
    try {
        if (!BASE_URL) return console.log("BASE_URL is not defined");

        const response = await fetch(`${BASE_URL}/project/category/`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const cities = await response.json()

        return cities
    } catch (error) {
        return error

    }
};
