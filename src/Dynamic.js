import React from 'react';
import './Dynamic.css'

class Dynamic extends React.Component {

    constructor() {
        super();
        this.state = {
            barSize: "0%",
            dynamoVersion: "",
            loadDescription: ""
        }

        //This is a reference to the DOM of the project that will be called in Dynamo to fill the loading properties
        window.setBarProperties = this.setBarProperties.bind(this);
    }

    render() {
        return (
            <div className='dynamicOptions'>
                <div >
                    Dynamo core {this.state.dynamoVersion}
                </div>
                <div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-indicator" style={{ width: this.state.barSize }} ></div>
                    </div>
                </div>
                <div >
                    {this.state.loadDescription}
                </div>
            </div>
        );
    }

    setBarProperties(dynamoVersion, loadDescription, barSize) {
        this.setState({ 
            barSize: barSize,
            dynamoVersion: dynamoVersion,
            loadDescription: loadDescription
        })
    }
}

export default Dynamic;