export const isProduction = window && window.app_env === 'production';

export const gaTrackingId = 'UA-143538110-1';
const backendUrl = !isProduction
  ? 'https://ucurtma-backend-test.herokuapp.com'
  : 'https://api.ucurtmaprojesi.com';

const config = {
  recaptcha: '6LdMmM0UAAAAAGk0QRoBV06-jmLTPOuj9xo5OTnz',
  backendUrl,
  endpoint: `${backendUrl}/graphql`,
  ethereum: {
    // 4: Rinkeby
    // 1: Mainnet
    networkId: !isProduction ? '4' : '1',
    // Testnet Ucurtma Token Address: 0x31f1cfbbbd9ce6ee0f8d9c79828b0b099653daa0
    // Mainnet BiLira Token Address: 0x2c537e5624e4af88a7ae4060c022609376c8d0eb
    biliraTokenAddress: !isProduction
      ? '0x31f1cfbbbd9ce6ee0f8d9c79828b0b099653daa0'
      : '0x2c537e5624e4af88a7ae4060c022609376c8d0eb',
    // Testnet DeploymentManager Address: 0x9CbBcE049B452b9481Db84280e2c1F190DeCbade
    // Mainnet DeploymentManager Address: 0x6b31cc28657fd849fed61339e7158869bb9aaef8 !! This may change after the recent changes.
    deploymentManagerAddress: !isProduction
      ? '0x9CbBcE049B452b9481Db84280e2c1F190DeCbade'
      : '0x6b31cc28657fd849fed61339e7158869bb9aaef8',
  },
};

export default config;
