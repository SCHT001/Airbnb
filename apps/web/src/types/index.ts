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

export type T_responseFavourites = {
  status: string;
  message: string;
  data: {
    id: string;
    user_id: string;
    listing_id: string;
    listing: {
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
      location: string;
      images: {
        id: string;
        listing_id: string;
        url: string;
      }[];
    };
  }[];
};

export type T_responseUserBookings = {
  status: string;
  message: string;
  error: any;
  data: {
    id: string;
    user_id: string;
    listing_id: string;
    check_in_date: Date;
    check_out_date: Date;
    total_price: number;
    status: string;
    listing: {
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
      location: string;
    };
  }[];
};
