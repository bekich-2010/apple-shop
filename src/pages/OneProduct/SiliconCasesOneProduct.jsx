import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const SiliconCasesOneProduct = () => {
    const [product, setProduct] = useState([])
    const params = useParams()

    useEffect(() => {
        axios(`http://localhost:8080/silicone_cases/${params.id}`)
            .then(res => setProduct(res.data))
    }, []);

    return (
        <section className="siliconone">
            <div className="container">
                <div className="siliconeone__product">
                    <img src={product.img} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default SiliconCasesOneProduct;