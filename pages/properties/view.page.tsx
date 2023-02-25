import Link from 'next/link';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Routes } from '../../lib/types';

export default function Viewenergy() {
  return (
    <div>
      <Breadcrumb>
        <Link href={Routes.PROPERTIES} passHref>
          <Breadcrumb.Item>Properties</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>Some energy Name</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
