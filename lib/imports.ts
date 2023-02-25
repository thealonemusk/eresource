export async function getWeb3() {
  return (await import('web3')).default;
}

export async function getFaker() {
  return (await import('@faker-js/faker')).default;
}
