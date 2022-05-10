import React from "react";
import Form from "react-bootstrap/Form";

/* Kyle,
look at liveshare chat - just use that. See if you can fix the modal centering
 */
import "./Search.css";

const Search = () => {
  return (
    <div className='search'>
      <Form>
        <i className="fas fa-exclamation-circle trailing"></i>
        <Form.Control type='text' placeholder='Search...' class="fomr-control form-icon-trailing" >
        </Form.Control>
      </Form>
    </div>
  );
};

export default Search;
