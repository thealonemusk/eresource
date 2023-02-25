import React, { useContext, useMemo, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { CONTRACT_CREATE_PROP_GAS } from '../lib/constants';
import StoreContext from '../lib/context';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function Createenergy() {
  const context = useContext(StoreContext);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [energyPrice, setenergyPrice] = useState(1);
  const [listingId, setListingId] = useState(1);
  const [pinCode, setPinCode] = useState('1');
  const [tokenSupply, setTokenSupply] = useState(0);
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract({
        from: context.account?.addressId,
        gas: CONTRACT_CREATE_PROP_GAS,
      });
      const res = await contract.methods
        .createenergy(energyPrice, listingId, pinCode, tokenSupply)
        .send();

      setMessage(JSON.stringify(res));
      setFetchState(FetchState.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setFetchState(FetchState.ERROR);
      setErrorMsg(err.message);
    }
  };
  const buttonText = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'Waiting...';

      case FetchState.ERROR:
        return 'Try Again';

      default:
        return 'Create Source';
    }
  }, [fetchState]);

  return (
    <Alert variant="secondary">
      <Alert.Heading>Create Energy Source</Alert.Heading>
      <p>Create a new energy to be listed in the marketplace.</p>
      <Form>
        <Form.Group className="mb-3" controlId="addressId">
          <Form.Label>Energy Price:</Form.Label>
          <Form.Control
            type="number"
            value={energyPrice}
            onChange={(e) => setenergyPrice(Number(e.target.value))}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addressId">
          <Form.Label>Listing ID:</Form.Label>
          <Form.Control
            type="number"
            value={listingId}
            onChange={(e) => setListingId(Number(e.target.value))}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Pin Code:</Form.Label>
          <Form.Control
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Energy in MegaWatts:</Form.Label>
          <Form.Control
            type="number"
            value={tokenSupply}
            onChange={(e) => setTokenSupply(Number(e.target.value))}
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
          <p className="text-danger">{errorMsg}</p>
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
