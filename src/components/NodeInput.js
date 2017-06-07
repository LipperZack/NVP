import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash';

import { ItemTypes } from '../cons/Constants';

const NodeInputSource = {
  beginDrag(props) {
    return props;
  }
};

const nodeOutputTarget = {
  hover(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.x + delta.x);
    const top = Math.round(item.y + delta.y);

    console.log('nodeOutputTarget');
    component.moveNode(item.id, left, top);
  }
};

function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class NodeInput extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <div
        style={{width:200,height:200}}><div className="node-port" />{name} {type}</div>
    );
  }
}

NodeInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default _.flow((DropTarget(ItemTypes.Node, nodeOutputTarget, collectDrop)))(NodeInput);
