export interface FungibleAssetMetaData {
  name: string;
  symbol: string;
  description: string;
  image: string;
  animation_url?: string;
  external_url: string;
  attributes: Attribute[];
  properties: Properties;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface Properties {
  files: File[];
  category: string;
}

export interface File {
  uri: string;
  type: string;
  cdn?: boolean;
}
