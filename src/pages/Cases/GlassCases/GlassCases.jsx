import React, {useEffect, useState} from 'react';
import axios from "axios";

const GlassCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/Glass_cases')
        .then(res => setCases(res.data))
    }, [])

    return (
        <div className="glasscases">
            <div className="glasscases__row">
                {
                    //Array.isArray(cases) &&
                    cases.map(item => (
                        <div className="glasscases__item" key={item.id}>
                            <p key={item.id}>{item.color}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default GlassCases;