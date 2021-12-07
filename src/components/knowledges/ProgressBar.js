import React from 'react';

const ProgressBar = (props) => {
    console.log(props)
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Éxperience</span>
                <span>3 Mois</span>
                <span>6 Mois</span>
            </div>

            <div>
                {
                    props.languages.map((item) => {
                        let xpYears = 2;
                        let ProgressBar = item.xp / xpYears * 100 + '%'

                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{ width: ProgressBar }}></div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ProgressBar;