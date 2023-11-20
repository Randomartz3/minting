import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.shibariumTestnet,
  mainnet: Networks.shibariumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ShibaRocks',
  tokenName: 'Shiba Rocks',
  tokenSymbol: 'SROCKS',
  hiddenMetadataUri: 'ipfs://QmYYB8978rHGoGBjZfqpi1paixZYy8yZuc7jvdoYFtBZD3/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 150,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 150,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x2D195DdAa3444A0b64842CCfFF6a78E13C1A0d25",
  marketplaceIdentifier: 'Shiba Rocks',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
