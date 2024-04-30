export type User = {
  id?: number;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  countryCode?: string;
  photo?: string;
};

export type T_Listings = {
  id: string;
  title: string;
  description: string;
  host_id: string;
  price: number;
  location: string;
  type: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  images: string;
};
