import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Node from './Node';

class Stage extends Component {
  render() {
    return (
      <Node />
    );
  }
}

export default DragDropContext(HTML5Backend)(Stage);
