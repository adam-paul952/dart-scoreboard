import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { TiArrowBack } from 'react-icons/ti';

const Header = ( {title, goBackButton} ) => {
    const history = useHistory();
  return (
    <div className='header'>
      <h1>{title}</h1>
      { goBackButton &&
          <Button
            onClick={ () => history.goBack() }
            variant='secondary'>
              <TiArrowBack />Go back
          </Button>
          }
    </div>
  )
}

export default Header;
