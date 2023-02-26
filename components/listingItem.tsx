import Link from 'next/link';
// import React from 'react';
// import { Button, Card } from 'react-bootstrap';
import { Listing, Routes } from '../lib/types';
import React, { useContext, useMemo, useState } from 'react';
import { Alert, Button, Form, Card } from 'react-bootstrap';
import { CONTRACT_CREATE_PROP_GAS, DEMO_LISTING_ID } from '../lib/constants';
import StoreContext from '../lib/context';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

type Props = {
  listing: Listing;
};
export default function ListingItem({ listing }: Props) {
  return (
    <div className="p-2 shadow-lg rounded" style={{ width: '25%' }}>
      <Card className='shadow-lg rounded'>
        <div className="ratio ratio-4x3 bg-secondary">
          <Card.Img src={listing.imageUrl} />
        </div>
        <Card.Body>
          <Card.Title className="text-truncate">{listing.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {listing.country}
          </Card.Subtitle>
          <Card.Text className="">Owner's address : {listing.listedBy}</Card.Text>
          <Card.Text className="text-truncate">Price : ${listing.energyPrice}</Card.Text>
          <div className="d-flex gap-2">
            
              <Button variant="primary">BID</Button>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
