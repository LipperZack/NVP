import React, { Component, PropTypes } from 'react';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import { ItemTypes } from '../cons/Constants';

import Node from './Node';

const stageTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.x + delta.x);
    const top = Math.round(item.y + delta.y);

    const Console = console;
    Console.log(item.id, item, delta);
    // component.moveNode(item.id, left, top);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Stage extends Component {
  renderNode(key, x, y) {
    return (
      <Node
        key={key}
        x={x}
        y={y}
      />
    );
  }

  render() {
    const nodes = [];
    nodes.push(this.renderNode(1,100,200));
    nodes.push(this.renderNode(2,300,400));

    const { x, y, connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        {nodes}
        {isOver &&
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'yellow'
        }} />
        }
      </div>
    );
  }
}

Stage.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

export default _.flow((DropTarget(ItemTypes.Node, stageTarget, collect)), DragDropContext(HTML5Backend))(Stage);
