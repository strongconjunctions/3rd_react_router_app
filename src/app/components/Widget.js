import React from 'react';


export default class Widget extends React.Component {
    render() {
        return(
            <div className="single-widget">
                {this.props.widgetData.map(function(value, i) {
                    return (
                        <li key={i}>{value}</li>
                    )
                })}
            </div>
        )
    }
}