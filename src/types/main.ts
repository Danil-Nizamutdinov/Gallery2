export interface IPainting {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  author?: IAuthor;
  location?: ILocation;
}

export interface IAuthor {
  id: number;
  name: string;
}

export interface ILocation {
  id: number;
  location: string;
}

export interface AxiosResPainting {
  res: IPainting[];
  totalCount: number;
}
