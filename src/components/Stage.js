import React, { Component, PropTypes } from 'react';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import { ItemTypes } from '../cons/Constants';

import Node from './Node';

const stageTarget = {
  drop(props) {
    const Console = console;
    Console.log(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Stage extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <Node />
      </div>
    );
  }
}

Stage.propTypes = {
  connectDropTarget: PropTypes.func.isRequired
};

export default _.flow((DropTarget(ItemTypes.Node, stageTarget, collect)), DragDropContext(HTML5Backend))(Stage);
