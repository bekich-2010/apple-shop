import React, {useEffect, useState} from 'react';
import axios from "axios";

const SiliconCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/silicone_cases')
            .then(res => setCases(res))
            .catch(err => console.log(err));
    }, [])
    return (

        <div className="siliconcases">
            <div className="siliconcases__row">
                {
                    Array.isArray(cases) && cases.map(item => (
                    <div className="glasscases__item" key={item.id}>
                        <p>{item.description}</p>
                    </div>
                    )
                )}

            </div>
        </div>
    );
};

export default SiliconCases;