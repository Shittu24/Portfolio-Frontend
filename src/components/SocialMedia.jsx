import React from "react";

import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Shittu24" target="blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/ibrahim_ether" target="blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://instagram.com" target="blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://wa.me/2348078612845" target="blank">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
