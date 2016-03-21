import React from 'react';

import Widget from './Widget';

export default class Widgets extends React.Component {
    render() {
        return (
            <div className="widgets-page">
                <h1>Widgets</h1>
                <div className="widget-wrapper">
                    <div className="widget-row">
                        <Widget widgetData={this.props.widgetData} />
                        <Widget widgetData={this.props.widgetData} />
                        <Widget widgetData={this.props.widgetData} />
                    </div>
                    <div className="widget-row">
                        <Widget widgetData={this.props.widgetData} />
                        <Widget widgetData={this.props.widgetData} />
                        <Widget widgetData={this.props.widgetData} />
                    </div>
                </div>
            </div>
        )
    }
}
