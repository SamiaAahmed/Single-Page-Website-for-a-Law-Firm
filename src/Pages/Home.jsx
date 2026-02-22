import React, { useState } from 'react';
import './Home.css'
import Button from '../Componatnts/button'
import logo from '../Assets/Maat Firm.png'
import Theme from '../Assets/sun-moon_svgrepo.com.png'
import logo2 from '../Assets/full logo.png'
import Titel from '../Componatnts/titel';
import Company from '../Assets/company.png'
import Card1 from '../Componatnts/card1'
import Feather from '../Assets/feather.svg'
import Map from '../Assets/MAP.svg'
import Footerlinks from '../Componatnts/footer_link';
import Icon1 from '../Assets/icon1.svg'
import Icon2 from '../Assets/icon 2.svg'
import Icon3 from '../Assets/icon3.svg'
import Icon4 from '../Assets/icon 4.svg'
import Icon5 from '../Assets/icon 5.svg'
import Icon6 from '../Assets/icon 6.svg'
import Icon7 from '../Assets/icon7.svg'
import Icon8 from '../Assets/icon 8.svg'
import Icon9 from '../Assets/icon 10.svg'
import Icon10 from '../Assets/icon 11.svg'
import Icon11 from '../Assets/icon 12.svg'
import Arrow from '../Assets/ArrowContainer.svg'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Practice Areas', href: '#' },
  { label: 'Our Team', href: '#' },
  { label: 'Cases', href: '#' },
  { label: 'FAQ', href: '#' },
];

const practiceAreas = [
  { label: 'Corporate Law', href: '#' },
  { label: 'Real Estate Law', href: '#' },
  { label: 'Family Law', href: '#' },
  { label: 'Criminal Defense', href: '#' },
  { label: 'Civil Litigation', href: '#' },
  { label: 'Intellectual Property', href: '#' },
];

const contactInfo = [
  { label: '📍  Cairo, Egypt — Heliopolis Branch', href: '#' },
  { label: '📍  Alexandria, Egypt — Smouha Branch', href: '#' },
  { label: '📞  +20 100 000 0000', href: 'tel:+201000000000' },
  { label: '✉️   info@maatfirm.com', href: 'mailto:info@maatfirm.com' },
  { label: '🕐  Sun – Thu: 9:00 AM – 5:00 PM', href: '#' },
];

const Home = () => {

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
    }

    const closeAlert = () => {
        setShowAlert(false);
    }

    return ( 
<>
{showAlert && (
    <div className='alert_overlay'>
        <div className='alert_box'>
            <div className='alert_icon'>✓</div>
            <h3 className='alert_title'>Message Sent!</h3>
            <p className='alert_text'>Your message has been successfully sent. We will get back to you soon.</p>
            <button className='alert_button' onClick={closeAlert}>OK</button>
        </div>
    </div>
)}

<header>
  <img src={logo} alt="logo" />
  <nav className="nav">
    <ul className="nav__list">
      <li><a className="nav__link" href="#">Home</a></li>
      <li><a className="nav__link" href="#">About</a></li>
      <li><a className="nav__link" href="#">Practice Areas</a></li>
      <li><a className="nav__link" href="#">Team</a></li>
      <li><a className="nav__link" href="#">Cases</a></li>
      <li><a className="nav__link" href="#">FAQ</a></li>
      <li><a className="nav__link" href="#">Contact</a></li>
    </ul>
  </nav>
  <div className='header_div'>
    <img className='icons' src={Theme} alt="theme toggle" />
    <Button></Button>
  </div>
</header>

<main>
  <section className='hero'>
    <div className='hero_div'>
      <div className='hero_div2'>
        <h1>Trusted Legal Expertise Across Egypt.</h1>
        <h3>With over 20 years of experience in Egyptian law, we provide comprehensive legal solutions tailored to your unique needs. Your success is our commitment.</h3>
        <div className='hero_div3'>
          <Button></Button>
          <button className='button2'>Learn More</button>
        </div>
      </div>
      <img src={logo2} alt="Maat Firm full logo" />
    </div>
  </section>

  <section className='section2'>
    <Titel/>
    <div className='section2_div1'>
      <h3 className='paragraph_h3'>Founded in 2004, our law firm has established itself as a leading provider of comprehensive legal services across Egypt. We combine deep expertise in Egyptian law with a client-focused approach to deliver exceptional results. Our team of experienced attorneys is dedicated to protecting your rights and achieving favorable outcomes in every case, whether in Cairo, Alexandria, or beyond.</h3>
      <img src={Company} alt="company" />
    </div>
    <div className='section2_div2'>
      <Card1 title="20+" subtitle="Years Experience" img={Arrow}/>
      <Card1  title="500+" subtitle="Cases Won" img={Icon1}/>
      <Card1  title="98%" subtitle="Client Satisfaction" img={Icon2}/>
    </div>
  </section>

  <section className='section3'>
    <Titel/>
    <div className='section3_div1'>
      <img className='section3_icon' src={Feather} alt="feather" />
      <div className='section3_div2'>
        <h3 className='section3_h3'>Maat - The Foundation of Justice</h3>
        <h4 className='section3_h4'>In ancient Egypt, Maat represented truth, justice, harmony, and cosmic order. Her ostrich feather symbolized the weighing of truth against falsehood. We honor this 5,000-year legacy by upholding the highest standards of justice, integrity, and balance in every case we handle.</h4>
      </div>
    </div>
    <div className='section3_div3'>
      <Titel/>
      <div className='section3_div4'>
        <Card1 title="Law Specialists" subtitle="Deep expertise in Egyptian legal system, regulations, and court procedures across all Egyptian jurisdictions." img={Icon3}/>
        <Card1 title="Nationwide Coverage" subtitle="Serving clients across Cairo, Giza, Alexandria, and all Egyptian governorates with dedicated local representation." img={Icon4}/>
        <Card1 title="Bilingual Excellence" subtitle="Fluent legal services in both Arabic and English, ensuring clear communication for all clients." img={Icon5}/>
      </div>
    </div>
  </section>

  <div className='section4'>
    <Titel/>
    <div className='section4_div1'>
      <Card1 title=" Commercial Law" subtitle="Expert guidance on business formation, commercial contracts, company law, and corporate governance under Egyptian legislation." img={Icon6}/>
      <Card1 title="Property Law" subtitle="Comprehensive services for property transactions, ownership disputes, registration with the Egyptian Land Registry, and development projects." img={Icon7}/>
      <Card1 title="Family Law" subtitle="Specialized support for marriage, divorce, custody, inheritance, and personal status matters in accordance with Egyptian family law." img={Icon8}/>
      <Card1 title="Employment Law" subtitle="Representation in employment disputes, labor contracts, and compliance with Egyptian Labor Law No. 12 of 2003." img={Icon9}/>
      <Card1 title=" Commercial Litigation" subtitle="Expert representation in Egyptian courts for civil disputes, commercial litigation, and contract enforcement." img={Icon10}/>
      <Card1 title="Alternative Resolution" subtitle="Efficient resolution through the Cairo Regional Centre for International Commercial Arbitration (CRCICA) and other ADR mechanisms." img={Icon11}/>
    </div>
  </div>

  <div className='section5'>
    <Titel/>
    <div className='section5_div1'>
      <form onSubmit={handleSubmit}>
        <h3 className='form_h3'>Send Message</h3>
        <div className='form_div1'>
          <div className='form_div2'>
            <input className='input1' placeholder='First Name' />
            <input className='input1' placeholder='Last Name' />
          </div>
          <input className='input2' placeholder='Email' />
          <input className='input2' placeholder='Phone Number' />
          <input className='input2' placeholder='Subject' />
          <input className='input3' placeholder='Message' />
          <button className='form_button' type='submit'>Send Message</button>
        </div>
      </form>
      <img src={Map} alt="map" />
    </div>
  </div>
</main>

<footer>
    <Footerlinks/>
 <Footerlinks/>
    <Footerlinks/>
 <Footerlinks/>
    <Footerlinks/>
</footer>
</>
    );
}

export default Home;