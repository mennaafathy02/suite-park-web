export type LocalizedText = {
  en?: string | null;
  ar?: string | null;
};

export type PolicyContent = {
  title: LocalizedText;
  description: LocalizedText;
  icon: string | null;
};

export interface PolicyRecord {
  id: number;
  content?: {
    policies?: PolicyContent[];
  } | null;
  created_at: string;
  updated_at: string;
}

export interface PolicyResponse {
  data: PolicyRecord;
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
