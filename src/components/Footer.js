import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <form>
        <input type="text" placeholder="Sort by Name" />
        <input type="text" placeholder="Sort by Language" />
        <input type="submit" placeholder="Search" />
      </form>

    </div>
  );
}

export default Footer;
