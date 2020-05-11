import React from 'react';
import  loader from './loader.gif';
import './spinner.css';

export const Spinner:React.FunctionComponent = () => {
    return <div className='loader d-flex justify-content-center'>
        <img src={loader} alt=''/>
    </div>;
};
