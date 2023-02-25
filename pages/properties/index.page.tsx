import { Spinner } from 'react-bootstrap';
import ListingItem from '../../components/listingItem';
import { useGetListings } from '../../lib/custom-hooks';
import { FetchState } from '../../lib/types';

export default function Properties() {
  const [fetchState, listings] = useGetListings();

  return (
    <div className="d-flex flex-wrap ">
      {fetchState === FetchState.LOADING && (
        <Spinner animation="grow" className="mx-auto" />
      )}
      {listings.map((listing) => (
        <ListingItem key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
