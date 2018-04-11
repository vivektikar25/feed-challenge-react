import React from "react";
import Snackbar from "material-ui/Snackbar";

const DisplayError = props => {
  return (
    <div>
      <Snackbar open={true} message={props.message} autoHideDuration={4000} />
    </div>
  );
};
export default DisplayError;
