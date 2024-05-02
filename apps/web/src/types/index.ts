export type T_Room = {
  id: string;
  accommodation: string;
  title: string;
  description: string;
  host_id: string;
  place_type: string;
  capacity: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  price: number;
  images: any;
  location: string;
  host: T_responseUserData;
};

export type T_Listing = {
  accommodation: string;
  title: string;
  description: string;
  price: number;
  place_type: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  location: string;
  host_id: string;
};

export type T_responseUserData = {
  id: string;
  name: string;
  email?: string;
  phone: string;
  countryCode: string;
  photo: string;
};
