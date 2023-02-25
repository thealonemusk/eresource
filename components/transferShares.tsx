import React, { useContext, useMemo, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { CONTRACT_CREATE_PROP_GAS, DEMO_LISTING_ID } from '../lib/constants';
import StoreContext from '../lib/context';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function TransferShares() {
  const context = useContext(StoreContext);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [listingId, setListingId] = useState(DEMO_LISTING_ID);
  const [addressId, setAddressId] = useState('');
  const [transferSupply, setTransferSupply] = useState(0);
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);
      setMessage('');
      setErrorMsg('');

      const contract = await getContract({
        from: context.account?.addressId,
        gas: CONTRACT_CREATE_PROP_GAS,
      });

      const res = await contract.methods
        .transferToken(addressId, transferSupply, listingId)
        .send();

      setListingId(0);
      setAddressId('');
      setTransferSupply(0);
      setMessage(JSON.stringify(res));
      setFetchState(FetchState.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setFetchState(FetchState.SUCCESS);
    }
  };
  const buttonText = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'Waiting...';

      case FetchState.ERROR:
        return 'Try Again';

      default:
        return 'Transfer energy Shares';
    }
  }, [fetchState]);

  return (

    <Alert variant="secondary" className='shadow-lg rounded bg-secondary text-dark'>
      <Alert.Heading>Transfer Energy in MegaWatts</Alert.Heading>

      <p>
        Transfer your shares from your existing properties to another owner.
      </p>
      <p>
        <ul>
          <li>
            Ashutosh's wallet address -{' '}
            <b>0x2212E8aad0b67460D140821ad0c55D81eAB16777</b>
          </li>
          <li>
            Nishchay's wallet address -{' '}
            <b>0x0d7D7b815Eb2fD1E770813ec951F80b03E265800</b>
          </li>
          {/* <li>
            Sud's wallet address -{' '}
            <b>0xe20517bdef7b9dE86225dA8ACd981fa992974729</b>
          </li> */}
        </ul>
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="addressId">
          <Form.Label>Listing ID:</Form.Label>
          <Form.Control
            type="number"
            value={listingId}
            onChange={(e) => setListingId(Number(e.target.value))}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addressId">
          <Form.Label>Transfer to:</Form.Label>
          <Form.Control
            type="text"
            value={addressId}
            onChange={(e) => setAddressId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Transfer amount /  Energy in MegaWatts:</Form.Label>
          <Form.Control
            type="number"
            value={transferSupply}
            onChange={(e) => setTransferSupply(Number(e.target.value))}
          />
        </Form.Group>
      </Form>
      {message && (
        <p className="text-break">
          Message received: <b>{message}</b>
        </p>
      )}
      <hr />
      {fetchState === FetchState.ERROR && (
        <>
          <p className="text-danger">Oops! Something went wrong...</p>
          <p className="text-danger text-break">{errorMsg}</p>
        </>
      )}
      <div className="d-flex justify-content-end">
        <Button
          variant="secondary"
          onClick={getMessage}
          disabled={fetchState === FetchState.LOADING}
        >
          {buttonText}
        </Button>
      </div>
    </Alert>
  );
}
