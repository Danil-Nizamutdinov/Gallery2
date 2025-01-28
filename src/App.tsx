import React, { useState } from 'react';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { useGetPaintingsQuery } from './services/GalleryService';
import Gallery from './components/Gallery/Gallery';
import PaginationBar from './components/PaginationBar/PaginationBar';

const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetPaintingsQuery({ page, q: title });
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Header />
      <Search title={title} setTitle={setTitle} />
      <Gallery paintings={data?.res} />
      {data && !title && (
        <PaginationBar
          count={Number(data.totalCount)}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default App;
