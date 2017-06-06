import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../cons/Constants';
import NodeInput from './NodeInput';
import NodeOutput from './NodeOutput';
import './Node.css';

const NodeSource = {
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


class Node extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        className="node-wrap"
        style={{
          opacity: isDragging ? 0 : 1,
          cursor: 'move',
          position: 'absolute',
          left: this.props.x,
          top: this.props.y
        }}
      >
        <div className="node-header">
          <span className="node-head-spec">range</span>
          <span className="node-head-toolbar">_ ⌘ ? x </span>
        </div>
        <div className="node-connection">
          <div className="node-connection-input">
            <NodeInput name="a" type="Array"/>
            <NodeInput name="b" type="Array"/>
            <NodeInput name="c" type="String"/>
          </div>
          <div className="node-connection-output">
            <NodeOutput name="result" type="String"/>
            <NodeOutput name="result" type="Array"/>
            <NodeOutput name="result" type="Array"/>
            <NodeOutput name="result" type="Array"/>
            <NodeOutput name="result" type="Array"/>
          </div>
        </div>
        <div className="node-content">
          <div className="node-content-cell">
            <label>range start:</label>
            <input type="text" />
          </div>
          <div className="node-content-cell">
            <label>range end:</label>
            <input type="text" />
          </div>
          <div className="node-content-cell">
            <label>increment:</label>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

Node.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default DragSource(ItemTypes.Node, NodeSource, collect)(Node);
