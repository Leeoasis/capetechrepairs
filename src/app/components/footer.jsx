import React from 'react';

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 bg-customPurple py-8">
      <div >
        <h2 className="font-bold">Information</h2>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div>
        <h2 className="font-bold">Account</h2>
        <p>My Account</p>
        <p>Track Order</p>
        <p>My Cart</p>
        <p>Checkout</p>
      </div>
      <div>
        <h2 className="font-bold">Capetechstore</h2>
        <p>About Us</p>
        <p>Blog & Posts</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h2 className="font-bold">Follow Us</h2>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Youtube</p>
        <p>Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
