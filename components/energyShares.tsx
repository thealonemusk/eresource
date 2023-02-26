import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import StoreContext from '../lib/context';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function energyShares() {
  const context = useContext(StoreContext);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [balance, setBalance] = useState(0);
  const [hasBalance, setHasBalance] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract();
      const addressId = context.account?.addressId;
      const res = await contract.methods.balanceOf(addressId).call();

      setBalance(res || 0);
      setHasBalance(true);
      setFetchState(FetchState.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setFetchState(FetchState.ERROR);
      setErrorMsg(err.message);
    }
  };

  const subscribeToEvents = async () => {
    const contract = await getContract();

    contract.events
      .Transfer({
        filter: {
          value: [],
        },
        fromBlock: 0,
      })
      .on('data', getMessage);
  };

  const buttonText = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'Waiting...';

      case FetchState.ERROR:
        return 'Try Again';

      default:
        return 'Refresh Balance';
    }
  }, [fetchState]);

  useEffect(() => {
    getMessage();
    subscribeToEvents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Alert variant="primary" className="shadow-lg rounded bg-dark text-white opacity-100">
      <Alert.Heading>Energy Shares</Alert.Heading>

      <p className="text-break">
        Balance: <b>{hasBalance ? balance : '----'}</b>
      </p>
      <hr />
      {fetchState === FetchState.ERROR && (
        <>
          <p className="text-danger">Oops! Something went wrong...</p>
          <p className="text-danger">{errorMsg}</p>
        </>
      )}
      <div className="d-flex justify-content-end">
        <Button
          variant="primary"
          onClick={getMessage}
          disabled={fetchState === FetchState.LOADING}
        >
          {buttonText}
        </Button>
      </div>
    </Alert>
  );
}
