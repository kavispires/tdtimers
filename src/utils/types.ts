import { ProgressProps } from 'antd';

export type Language = 'en' | 'pt';

export type Dictionary<T> = Record<string, T>;

export type Game = {
  id: string;
  title: string;
  banner: string;
  audio: string;
  timer?: {
    lead: number;
    cutoff: number;
    icon: React.ComponentType;
    type: ProgressProps['type'];
  };
};

export type ItemCard = {
  id: string;
  name: string;
};

export type Player = {
  id: string;
  name: string;
  avatarId: string;
  score: number;
  role?: string;
};

export type AvatarEntry = {
  id: string;
  name: string;
  used?: boolean;
};
