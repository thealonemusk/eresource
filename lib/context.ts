import { createContext, Dispatch, SetStateAction } from 'react';
import { EthAccount, FetchState, Listing } from './types';

const StoreContext = createContext(
  {} as {
    account: EthAccount | null;
    listings: Listing[];
    hasListings: boolean;
    setAccount: Dispatch<SetStateAction<EthAccount | null>>;
    setListings: Dispatch<SetStateAction<Listing[]>>;
    setHasListings: Dispatch<SetStateAction<boolean>>;
  }
);

export default StoreContext;
