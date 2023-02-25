import { useContext, useEffect, useState } from 'react';
import StoreContext from './context';
import { getFaker } from './imports';
import { FetchState, Listing } from './types';

export function useMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

export function useCurrentAddressId() {
  const context = useContext(StoreContext);

  return context.account?.addressId;
}

export function useGetListings() {
  const context = useContext(StoreContext);
  const { hasListings } = context;
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const getListings = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const faker = await getFaker();
      const items: Listing[] = [];

      for (let i = 0; i < 16; i++) {
        items.push({
          id: faker.datatype.uuid(),
          name: faker.company.companyName(),
          country: faker.address.country(),
          contractAddress: faker.finance.ethereumAddress(),
          description: faker.lorem.sentences(),
          listedBy: faker.finance.ethereumAddress(),
          imageUrl: faker.image.city(0, 0, true),
        });
      }

      context.setListings(items);
      context.setHasListings(true);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      console.error(err);
      setFetchState(FetchState.ERROR);
    }
  };

  useEffect(() => {
    if (!hasListings) {
      getListings();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasListings]);

  return [fetchState, context.listings] as const;
}
