import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../cons/Constants';

const NodeOutputSource = {
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


class NodeOutput extends Component {
  render() {
    const { connectDragSource, isDragging, name, type } = this.props;
    return connectDragSource(
      <label>{name} {type}<div className="node-port" /></label>
    );
  }
}

NodeOutput.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.NodeOutput, NodeOutputSource, collect)(NodeOutput);
