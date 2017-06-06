import React, { Component, PropTypes } from 'react';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import { connect } from 'react-redux';
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
  renderNode(node) {
    return (
      <Node
        key={node.id}
        id={node.id}
        x={node.x}
        y={node.y}
      />
    );
  }

  render() {
    const nodes = [];
    this.props.nodes.forEach((node) => {
      nodes.push(this.renderNode(node));
    });

    const { connectDropTarget, isOver } = this.props;
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
  nodes: PropTypes.arrayOf(PropTypes.object),
  isOver: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    nodes: state.nodes
  };
}

export default _.flow((DropTarget(ItemTypes.Node, stageTarget, collect)), DragDropContext(HTML5Backend))(connect(mapStateToProps)(Stage));
