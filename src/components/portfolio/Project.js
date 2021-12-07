
import React, { Component } from 'react'

export default class Project extends Component {

    state = {
        showInfo: false
    }

    handleinfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }



    render() {
        let { name, languagesIcons, source, info, picture } = this.props.item;

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleinfo} />
                <span className="infos" onClick={this.handleinfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank" >Lien vers le site</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>

                                <div className="button return" onClick={this.handleinfo}>
                                    Retourner sur la page
                                </div>
                            </div>
                        </div>
                    )
                }



            </div>
        )
    }
}
