import React from 'react';
import { MdOutlineCheckCircle } from "react-icons/md";

const OtherSkill = () => {
  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li><i className="icon"><MdOutlineCheckCircle /> </i>
            Anglais intermédiaire</li>
          <li><i className="icon"><MdOutlineCheckCircle /> </i>
            GitHub</li>
          <li><i className="icon"><MdOutlineCheckCircle /> </i>
            Méthodes Agiles</li>
          <li><i className="icon"><MdOutlineCheckCircle /> </i>
            Suite Adobe</li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkill;