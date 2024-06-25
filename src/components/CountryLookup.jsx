"use client";
import React, { useEffect, useState } from 'react'

export default function CountryLookup () {
    const [country, setCountry] = useState("");

    useEffect(() => {
        const getCountry = async () => {
            const response = await fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=b27bd27c9fe84b83b701b9b4e8815ad6")
                .then((res) => res.json())
                .then((data) => data.country.name);
           
            if (!response) return;
            setCountry(response);
        }
        getCountry();
    }, []);
    return (
        <div>{country}</div>
    );
};
