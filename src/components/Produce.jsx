import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <div>
      <style jsx>{`

      `}</style>
    <h3>{props.month}</h3>
      <p>{props.selection}</p>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Ticket;
