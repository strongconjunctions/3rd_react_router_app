import React from 'react';
import Widgets from './Widgets';

export default class WidgetContainer extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            widgetData: ['one', 'two', 'three', "four"]
        }
     }

    render() {
        return (
            <Widgets widgetData={this.state.widgetData} />
        )
    }
}
