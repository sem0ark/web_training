import { PropTypes } from 'prop-types';
import Button from './Button';

import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>

      {
        location.pathname === '/'
        && <Button color={showAdd ? 'darkred' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}></Button>
      }
    </header>
  )
}

Header.defaultProps = {
  title: 'TaskTracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
