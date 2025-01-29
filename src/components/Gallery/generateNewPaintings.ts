import { IAuthor, ILocation, IPainting } from 'src/types/main';

const generateNewPaintings = (
  paintings: IPainting[],
  authors: IAuthor[],
  locations: ILocation[]
): IPainting[] => {
  const newPaintings = paintings.map((painting) => ({
    ...painting,
    author: authors.find((author: IAuthor) => author.id === painting.authorId),
    location: locations.find(
      (location: ILocation) => location.id === painting.locationId
    ),
  }));
  return newPaintings;
};

export default generateNewPaintings;
