import React from 'react';
import { Link } from 'react-router';

function ErrorPage() {
  return (
    <div>
      <h1>Opps! unable to laod this page</h1>
      <p>Go back home by clicking here</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default ErrorPage;
