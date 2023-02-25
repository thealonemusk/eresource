declare global {
  interface Window {
    ethereum: any;
  }
}

export enum Routes {
  HOME = '/',
  PROPERTIES = '/properties',
  energy_CREATE = '/properties/create',
  energy_VIEW = '/properties/view',
}

export enum ConnectState {
  DEFAULT = 'DEFAULT',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
}

export enum FetchState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type EthAccount = {
  addressId: string;
};

export type Listing = {
  id: string;
  name: string;
  country: string;
  contractAddress: string;
  description: string;
  listedBy: string;
  imageUrl: string;
};
