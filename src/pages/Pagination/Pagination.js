import React from 'react';
import dwnarr from '../../assets/dwnarr.png';
import arr from '../../assets/arrow.png'
import './Pagination.css'
const Pagination = () => {
    return (
        <div className='  footban d-flex gap-4  '>
            <div className="d-flex btncenter gap-2 align-items-center">
                <button className='pgbtn'>
                    <img src={dwnarr} alt="" />
                </button>
                <h6 className="text-white">Page</h6>
                <button className='cpgbtn'>
                    2
                </button>
                <h6 className="text-white"> of Pages</h6>
                <button className='pgbtn'>
                    <img src={arr} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;