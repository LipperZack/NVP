import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../cons/Constants';
import './Node.css';

const NodeSource = {
  beginDrag(props) {
    return {};
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
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move'
        }}
      >
        <div className="node-header">
          <span className="node-head-spec">range</span>
          <span className="node-head-toolbar">_ ⌘ ? x </span>
        </div>
        <div className="node-connection">
          <div className="node-connection-input">
            <label><div className="node-port" />a: Array</label>
            <label><div className="node-port" />b: Array</label>
            <label><div className="node-port" />c: Array</label>
          </div>
          <div className="node-connection-output">
            <label>result: Array<div className="node-port" /></label>
            <label>result: Array<div className="node-port" /></label>
            <label>result: Array<div className="node-port" /></label>
            <label>result: Array<div className="node-port" /></label>
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

export default DragSource(ItemTypes.Node, NodeSource, collect)(Node);
