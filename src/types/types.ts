export type ItemChannelCard = {
  id: number;
  idx: number;
  itemContainerId: string;
  channelData: ChannelData;
};

export type ItemFilmCard = {
  id: number;
  idx: number;
  itemContainerId: string;
  filmData: FilmData;
};

export type BrizBillingProductInfo = {
  in_favorites: boolean;
  is_available: boolean;
  is_free: boolean;
};

export type ChannelData = {
  id: number;
  logo: string;
  name: string;
  genre_id: string;
  briz_billing_product_info: BrizBillingProductInfo;
};

export type FilmData = {
  age_limit: string;
  categories: number[];
  countries: number[];
  country: string;
  delivery_rules: string[];
  genres: number[];
  id: number;
  image: { big: string; original: string; small: string };
  is_exclusive: boolean;
  rating_imdb: string;
  rating_kinopoisk: string;
  show: string;
  slug: string;
  title: string;
  year: string;
};
