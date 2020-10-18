import React from 'react';
import LoaderGif from './loading.gif';

export default function Loader () {
    return (
        <div>
            <img width="100%" src={LoaderGif} className="loading" alt="Loading..." />
        </div>
    )
}
