import { BASE_URL } from "@/utils/url";

export const getPartnersLogo = async () => {
    try {
      console.log(BASE_URL)
      if (!BASE_URL) return console.log("BASE_URL is not defined");
  
      const response = await fetch(`${BASE_URL}/partner/`);
  
      if (!response.ok) throw new Error("Failed to fetch data");
  
      return response.json();
    } catch (error) {
      console.log(error);
      return {};
    }
  };