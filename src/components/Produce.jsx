import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <style jsx>{`

      `}</style>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Produce;
