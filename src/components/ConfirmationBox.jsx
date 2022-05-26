import React from "react";
import "../styles/ConfirmationBox.css";

const ConfirmationBox = ({ setOpen, deleteFunction, confirmation }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    deleteFunction();
  };
  return (
    <div className="cb-background">
      <div className="cb-container">
        {confirmation && (
          <div className="cb-title">
            <h3>Are you sure you want to cancel or delete this item?</h3>
          </div>
        )}

        {confirmation && (
          <div className="cb-footer">
            <button className="btn btn-full" onClick={handleCancel}>
              No
            </button>
            <button className="btn con-delete-btn" onClick={handleDelete}>
              Yes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationBox;
