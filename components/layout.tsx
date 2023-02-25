import React, { ReactNode, useState } from 'react';
import { Container } from 'react-bootstrap';
import StoreContext from '../lib/context';
import { EthAccount, Listing } from '../lib/types';
import Header from './header';
import MetaTags from './metaTags';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [account, setAccount] = useState<EthAccount | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [hasListings, setHasListings] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        account,
        listings,
        hasListings,
        setAccount,
        setListings,
        setHasListings,
      }}
    >
      <MetaTags />
      <Header />
      <main>
        <Container className="py-4">{children}</Container>
      </main>
    </StoreContext.Provider>
  );
}
