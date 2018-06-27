import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div>
      <style jsx>{`

      `}</style>
      <h3>{props.day}</h3>
      <p>{props.location}{props.hours}{props.booth}</p>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
