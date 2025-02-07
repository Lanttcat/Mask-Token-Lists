export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Optimistic = 10,
  Kardiachain = 24,
  Cronos = 25,
  BNB = 56,
  Sokol = 77,
  Chapel = 97,
  xDai = 100,
  Fuse = 122,
  Heco = 128,
  Fantom = 250,
  Boba = 288,
  Polygon = 137,
  Mumbai = 80001,
  Stardust = 588,
  Astar = 592,
  Conflux = 1030,
  Metis = 1088,
  Moonbeam = 1284,
  Moonriver = 1285,
  Arbitrum = 42161,
  Celo = 42220,
  Avalanche = 43114,
  Aurora = 1313161554,
  Harmony = 1666600000,
  Palm = 11297108109,
}

export interface FungibleToken {
  chainId: ChainId
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI?: string
  originLogoURI?: string
}

export interface Provider {
  getProviderName(): Providers
  isSupportChain(chainId: ChainId): boolean
  generateFungibleTokens(chainId: ChainId, exclude: FungibleToken[]): Promise<FungibleToken[]>
}

export enum Providers {
  coinGeoko = 'coin-geeoko',
  explorer = 'explorer',
  cryptoRank = 'crypto-rank',
  coinMarketCap = 'coinmarketcap',
  subScan = 'subscan',
}

export interface FungibleTokenProvider extends FungibleToken {
  provider: Providers
}
