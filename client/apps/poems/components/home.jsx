import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';
import _ from 'lodash';

export default class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      welcomeMessage: PropTypes.string,
    })
  }

  buildSegments() {
    return _.map(_.range(0, 9), () => ({
      value: 1,
      color: 'green'
    }));
  }

  render() {
    return (
      <div>
        <p>Poems by Catelyn Schmidt</p>
        <PieChart
          data={this.buildSegments()}
        />
      </div>
    );
  }
}
