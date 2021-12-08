import React from 'react';
import { MdComputer } from "react-icons/md"
import { MdGames } from "react-icons/md"
import { MdCode } from "react-icons/md"
import { MdSmartphone } from "react-icons/md"


const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby" >
                    <i className="icon"><MdComputer /></i>
                    <span>Informatique</span>
                </li>
                <li className="hobby">
                    <i className="icon"><MdGames /></i>
                    <span>Jeux-video</span>
                </li>
                <li className="hobby">
                    <i className="icon"><MdCode /></i>
                    <span>Le code( oui c'est un passion )</span>
                </li>
                <li className="hobby">
                    <i className="icon"><MdSmartphone /></i>
                    <span>La High-tech et les nouvelles technologies</span>
                </li>


            </ul>

        </div>
    );
};

export default Hobbies;