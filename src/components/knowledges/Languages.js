import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "JavaScript", xp: 1.7 },
            { id: 2, value: "Css", xp: 0.8 },
            { id: 3, value: "Html", xp: 1.3 },
            { id: 4, value: "Java", xp: 1.6 },

        ],

        frameworks: [
            { id: 1, value: "React", xp: 1.8 },
            { id: 2, value: "Bostrap", xp: 1 },
            { id: 3, value: "Node", xp: 1 },
            { id: 4, value: "JavaServer Faces", xp: 0.5 },

        ]
    }

    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="Frameworks & Bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        )
    }
}

export default Languages
