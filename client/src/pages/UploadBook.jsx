import React from 'react'
import { useRef } from "react";


 const AddBook = ({ handleFile }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <div className='flex  ml-40 mt-40'>
      <button className="button-upload ml-44" onClick={handleClick}>
        Add Book
      </button>
      <input
        type="file"
        accept='.pdf'
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }} // Make the file input element invisible
      />
    </div>
  );
};


export default AddBook;