import React from 'react';
import {
  useGetAuthorsQuery,
  useGetLocationsQuery,
} from 'src/services/GalleryService';
import { IAuthor, ILocation, IPainting } from 'src/types/main';
import Painting from './Painting/Painting';
import styles from './gallery.module.scss';
import NoMatches from './NoMatches/NoMatches';

interface GalleryProps {
  paintings: IPainting[] | undefined;
}

const Gallery: React.FC<GalleryProps> = ({ paintings }) => {
  const { data: authors, isLoading: isLoadingAuthors } = useGetAuthorsQuery('');
  const { data: locations, isLoading: isLoadingLocations } =
    useGetLocationsQuery('');

  if (isLoadingAuthors || isLoadingLocations) {
    return <div>Loading...</div>;
  }

  if (paintings && paintings?.length < 1) return <NoMatches />;

  const newPaintings = paintings?.map((painting) => ({
    ...painting,
    author: authors?.find((author: IAuthor) => author.id === painting.authorId),
    location: locations?.find(
      (location: ILocation) => location.id === painting.locationId
    ),
  }));

  return (
    <div className={styles.gallery}>
      {paintings &&
        newPaintings?.map((p: IPainting) => (
          <Painting painting={p} key={p.id} />
        ))}
    </div>
  );
};

export default Gallery;
