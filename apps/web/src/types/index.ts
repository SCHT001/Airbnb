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
	images: {
		id: string;
		listingId: string;
		url: string;
	}[];
};
