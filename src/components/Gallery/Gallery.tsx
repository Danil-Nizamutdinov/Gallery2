import React from 'react';
import {
  useGetAuthorsQuery,
  useGetLocationsQuery,
} from 'src/services/GalleryService';
import { IPainting } from 'src/types/main';
import Painting from './Painting/Painting';
import styles from './gallery.module.scss';
import NoMatches from './NoMatches/NoMatches';
import generateNewPaintings from './generateNewPaintings';

interface GalleryProps {
  paintings: IPainting[];
}

const Gallery: React.FC<GalleryProps> = ({ paintings }) => {
  const { data: authors, isLoading: isLoadingAuthors } = useGetAuthorsQuery('');
  const { data: locations, isLoading: isLoadingLocations } =
    useGetLocationsQuery('');

  if (isLoadingAuthors || isLoadingLocations) {
    return <div>Loading...</div>;
  }

  if (paintings && paintings.length < 1) return <NoMatches />;

  const newPaintings: IPainting[] | boolean =
    authors && locations
      ? generateNewPaintings(paintings, authors, locations)
      : false;

  return (
    <div className={styles.gallery}>
      {newPaintings &&
        newPaintings.map((p: IPainting) => (
          <Painting painting={p} key={p.id} />
        ))}
    </div>
  );
};

export default Gallery;
