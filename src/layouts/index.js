import React from 'react';
import BasicLayout from './BasicLayout';
import DetailsLayout from './DetailsLayout';

export default function (props) {
  const { location: { pathname } } = props;
  const router = '/' + pathname.split('/')[1];
  if (router === '/details') {
    return <DetailsLayout {...props}>{props.children}</DetailsLayout>
  }

  return <BasicLayout {...props}>{props.children}</BasicLayout>

}