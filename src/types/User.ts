export interface UserLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface UserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface UserDOB {
  date: string;
  age: number;
}

export interface UserRegistered {
  date: string;
  age: number;
}

export interface UserID {
  name: string;
  value: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: UserLocation;
  email: string;
  login: UserLogin;
  dob: UserDOB;
  registered: UserRegistered;
  phone: string;
  cell: string;
  id: UserID;
  picture: UserPicture;
  nat: string;
}

export interface UserResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
