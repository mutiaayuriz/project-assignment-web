export interface Country {
  name: Name;
  tld: Array<any>;
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Object;
  idd: Idd;
  capital: Array<any>;
  altSpellings: Array<any>;
  region: string;
  languages: Object;
  translations: Object;
  latlng: Array<any>;
  landlocked: boolean;
  borders: Array<any>;
  area: number;
  demonyms: Object;
  flag: string;
  maps: Maps;
  population: bigint;
  gini: Object;
  fifa: string;
  cars: Cars;
  timezones: Array<any>;
  continents: Array<any>;
  flags: Object;
  coatOfArms: Object;
  startOfWeek: string;
  capitalInfo: Object;
  postalCode: PostalCode;
}

interface Eng {
  common: string;
  official: string;
}

interface NativeName {
  eng: Eng;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface Currencies {
  name: string;
  symbol: string;
}

interface Idd {
  root: string;
  suffixes: Array<[]>;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Cars {
  signs: Array<any>;
  side: string;
}

interface PostalCode {
  format: string;
  regex: string;
}
