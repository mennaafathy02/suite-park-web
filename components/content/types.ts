export type LocalizedText = {
  en?: string | null;
  ar?: string | null;
};

export type PolicyContent = Record<string, LocalizedText>;

export interface PolicyRecord {
  id: number;
  content?: {
    policy?: PolicyContent | null;
  } | null;
  created_at: string;
  updated_at: string;
}

export interface PolicyResponse {
  data: PolicyRecord[];
}

export interface ApiImage {
  id: number;
  name: string;
  path: string;
  type: string;
  room_id: number | null;
  created_at: string;
  updated_at: string;
}
