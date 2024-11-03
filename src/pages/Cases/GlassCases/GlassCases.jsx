import React, {useEffect, useState} from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";

const GlassCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/Glass_cases')
        .then(res => setCases(res))
    }, [])

    return (
        <div className="glasscases">
            <div className="glasscases__row">
                {
                    Array.isArray(cases) && cases.map(item => (
                        <div className="glasscases__item" key={item.id}>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default GlassCases;