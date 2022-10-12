
import React, { useState, useEffect } from 'react'

const Home: React.FC = () => {
    useEffect(() => {
        const getAPI = () => {
            const API = 'http://127.0.0.1:5001/';
            fetch (API)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setLoading(false);
                    setupApiData(data);
                });
        };
        getAPI();
    }, []);
    const [apiData, setupApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <p>      
            <section>
                {apiData.map((client) => {
                    return(
                        <p>{client.first_name}</p>
                    )
                })}
            </section>    
        </p>
    );
};

export default Home;