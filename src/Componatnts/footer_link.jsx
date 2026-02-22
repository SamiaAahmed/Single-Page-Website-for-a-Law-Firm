import React from 'react';
import './footer_link.css';

const Footerlinks = () => {
    return ( 
        <div className='footer_div3'>
            <h2 className='footer__title'>Quick Links</h2>
            <ul className='footer__list'>
                    <li>
                        <a className='footer__link' href='#'>Home</a>
                          <a className='footer__link' href='#'>About</a>
                            <a className='footer__link' href='#'>Team</a>
                    </li>
            </ul>
        </div>
    );
}

export default Footerlinks;
