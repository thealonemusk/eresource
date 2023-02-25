import { getWeb3 } from './imports';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './constants';

export async function getCurrentAddressId() {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  return accounts[0];
}

export async function getContract(options?: any) {
  const Web3 = await getWeb3();
  const web3 = new Web3(window.ethereum);

  return new web3.eth.Contract(CONTRACT_ABI as [], CONTRACT_ADDRESS, options);
}
