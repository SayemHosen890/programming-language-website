import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LanguageDetail from '../LanguageDetail/LanguageDetail';

const Service = () => {
    const [languageDetails, setLanguageDetails] = useState([]);

    useEffect(() => {
        fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setLanguageDetails(data))
    }, []);

    return (
        <div>
            <div className='mt-2'>
                <h2>Our Services And Learning Topics</h2>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    languageDetails.map(detail => <LanguageDetail key={detail.id} detail={detail}></LanguageDetail>)
                }
            </div>
        </div>
    );
};

export default Service;