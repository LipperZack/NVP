import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../cons/Constants';

const NodeInputSource = {
  beginDrag(props) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}


class NodeInput extends Component {
  render() {
    const { connectDragSource, isDragging, name, type } = this.props;
    return connectDragSource(
      <label><div className="node-port" />{name} {type}</label>
    );
  }
}

NodeInput.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.NodeInput, NodeInputSource, collect)(NodeInput);
