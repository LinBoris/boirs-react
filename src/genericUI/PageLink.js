/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router';
/* eslint-enable no-unused-vars */

const PageLink = props => {
  return (
    <Link to={props.pagePath}>{props.title}</Link>
  );
};

export default PageLink;
