
import React, { useState, useEffect } from 'react'
import "./Header.css"

const Header: React.FC = () => {
    // Source: https://andrewbaisden.medium.com/creating-react-node-apps-that-connect-to-postgresql-and-harperdb-2734771c5261
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
        <div>
            {apiData.map((client) => {
                return(
                    <div>
                    </div>
                    /*<p>Hello, I'm {client.first_name} {client.last_name}</p>*/
                )
            })}
        </div>
    )
};

export default Header;