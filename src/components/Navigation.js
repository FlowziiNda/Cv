import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <div className="sidebar">
       <div className="id">
           <div className="idContent">
           <img src= "./media/photomo3.jpg" alt="profil-pic"/>
           <h3>baptiste Estadieu</h3>
           </div>
       </div>
       <div className="navigation">
        <ul>
        <li>
           <NavLink exact to="/" activeClassName="navActive">
           <i className="fas fa-home"></i>
           <span>Acceuil</span>
           </NavLink>
         </li>
         <li>
           <NavLink exact to="/competences" activeClassName="navActive">
           <i className="fas fa-mountain"></i>
           <span>Compétences</span>
           </NavLink>
         </li>
         <li>
           <NavLink exact to="/portfolio" activeClassName="navActive">
           <i className="fas fa-images"></i>
           <span>PortFolio</span>
           </NavLink>
         </li>
         <li>
           <NavLink exact to="/contact" activeClassName="navActive">
           <i className="fas fa-address-book"></i>
           <span>Contact</span>
           </NavLink>
         </li>

        </ul>
       </div>
       <div className="signature">
       <p>By Estadieu baptiste - 2021</p>
       </div>
    </div>
    );
};

export default Navigation;