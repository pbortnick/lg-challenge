import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <form>
        <input id="name-sort" type="text" placeholder="Sort by Name" />
        <input id="language-sort" type="text" placeholder="  Sort by Language" />
        <input type="submit" placeholder="Search" />
      </form>

    </div>
  );
}

export default Footer;
