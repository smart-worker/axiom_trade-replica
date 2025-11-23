export type StatTag = {
  icon: 'user' | 'chef' | 'target' | 'ghost' | 'cubes';
  value: number;
  unit: string;
  color: 'red' | 'green';
  duration?: string;
};

export type Token = {
  id: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  creatorAddress: string;
  age: string;
  marketCap: number;
  volume: number;
  fValue: number;
  txCount: number;
  stats: {
    users: number;
    candlesticks: number;
    trophies: number;
    crowns: string;
  };
  tags: StatTag[];
  solAmount: number;
  isNew?: boolean;
  isFinalStretch?: boolean;
  isMigrated?: boolean;
};

export type SortConfig = {
  key: keyof Token;
  direction: 'ascending' | 'descending';
} | null;
