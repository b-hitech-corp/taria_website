import React from 'react';
import './header.css';
import hbg from './header.svg';
import himg from './img1.png';
import apple from './app1.jpeg';

const Header = () => {
    return (
        <div className='header'>
            <img src={hbg} />
            <div className='h-infos'>
                <div className='h-r'>
                    <p className='appName'>Taria Space</p>
                    <p className='slogan'>déplacez vous oû veuillez et quand vous le voulez</p>
                    <div className='stor-bnt'>
                        <div className='bnt'>
                            <img src={apple} alt="" />
                        </div>
                    </div>
                </div>
                <div className='h-l'>
                    <img src={himg} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Header