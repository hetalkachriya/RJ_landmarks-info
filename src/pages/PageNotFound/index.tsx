import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function PageNotFound() {
  return (
    <div className='PageNotFound'>
      <h2>Page Not Found</h2>
      <Link to={'/'} title='Home'>
        Home{' '}
      </Link>
    </div>
  );
}
