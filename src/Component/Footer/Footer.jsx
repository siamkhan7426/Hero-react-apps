import React from 'react';

const Footer = () => {
    return (
<section className='mt-10'>
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Apps</a>
    <a className="link link-hover">Installation</a>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO IO APPS</p>
  </aside>
</footer>
        </section>
    );
};

export default Footer;