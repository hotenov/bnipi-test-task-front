// User object example
// GET https://jsonplaceholder.typicode.com/users/5

// {
// 	"id": 5,
// 	"name": "Chelsey Dietrich",
// 	"username": "Kamren",
// 	"email": "Lucio_Hettinger@annie.ca",
// 	"address": {
// 		"street": "Skiles Walks",
// 		"suite": "Suite 351",
// 		"city": "Roscoeview",
// 		"zipcode": "33263",
// 		"geo": {
// 			"lat": "-31.8129",
// 			"lng": "62.5342"
// 		}
// 	},
// 	"phone": "(254)954-1289",
// 	"website": "demarco.info",
// 	"company": {
// 		"name": "Keebler LLC",
// 		"catchPhrase": "User-centric fault-tolerant solution",
// 		"bs": "revolutionize end-to-end systems"
// 	}
// }

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
