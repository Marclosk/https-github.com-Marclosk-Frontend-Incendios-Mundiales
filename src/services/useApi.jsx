import { useState, useEffect } from "react";
import Papa from "papaparse";

const useApi = (url, format = "json") => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error! Status: ${response.status}`);
                }
                const text_data = await response.text();
                if (format === "csv") {
                    Papa.parse(text_data, {
                        header: true,
                        complete: (results) => {
                            setData(results.data);
                        },
                        error: (error) => {
                            throw error;
                        }
                    });
                } else {
                    const json_data = JSON.parse(text_data);
                    setData(json_data);
                }
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
                setData(false);
            }
        };

        getData(url);
    }, [url, format]);

    return data;
};

export default useApi;
