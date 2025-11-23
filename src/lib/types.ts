export type Token = {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  priceChange24h: number;
  priceChange24hPercent: number;
  volume24h: number;
  marketCap: number;
  isNew?: boolean;
  isFinalStretch?: boolean;
  isMigrated?: boolean;
};

export type SortConfig = {
  key: keyof Token;
  direction: 'ascending' | 'descending';
} | null;
