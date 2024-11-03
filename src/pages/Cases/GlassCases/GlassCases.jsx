import React, {useEffect, useState} from 'react';
import axios from "axios";

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
                    cases.map((item) => (
                        <p>{item.color}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default GlassCases;