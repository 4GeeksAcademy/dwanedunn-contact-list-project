import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; // Custom hook for accessing the global state.

// Importing icons from react-icons library
import { FaPencil } from 'react-icons/fa6';
import { RiDeleteBin6Fill } from 'react-icons/ri';
// Contact component
export const Contact = () => {
  return (
    <div className="contact-wrap">
      <div className="proifle-image"></div>
      <div className="details"></div>
      <div className="icon-actions">
        <FaPencil />
        <RiDeleteBin6Fill />
      </div>
    </div>
  );
};
