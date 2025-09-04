import { useState, useEffect } from "react";
import axios from "axios";
import data from "../data.js";

const API_URL = "https://reqres.in/api/workintech";

export const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndPostData = async () => {
      setLoading(true);
      try {
        // 1. POST isteği 
        const postResponse = await axios.post(
          API_URL,
          {
            type: "portfolio_request",
            action: "fetch_data",
            timestamp: new Date().toISOString(),
            dataKeys: Object.keys(data),
          },
          {
            headers: {
              "x-api-key": "reqres-free-v1", 
            },
          }
        );

        console.log("POST isteği başarılı:", postResponse.data);

        setPortfolioData(data);
      } catch (err) {
        console.error("API isteği başarısız:", err);
        setError(err.message);
        setPortfolioData(data);
      } finally {
        setLoading(false);
      }
    };

    fetchAndPostData();
  }, []);

 
  return {
    data: portfolioData,
    loading,
    error,
  };
};
