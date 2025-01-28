import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';
import { AxiosResPainting, IAuthor, ILocation, IPainting } from '../types/main';

const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (build) => ({
    getPaintings: build.query<AxiosResPainting, { page?: number; q?: string }>({
      query: ({ page = 1, q = '' }) => ({
        url: 'paintings',
        method: 'get',
        params: {
          _limit: 6,
          _page: q ? 1 : page,
          q,
        },
      }),
      transformResponse: (
        response: IPainting[],
        meta: any
      ): AxiosResPainting => {
        const totalCount: number = meta.headers['x-total-count'] || 0;

        return {
          res: response,
          totalCount,
        };
      },
    }),
    getAuthors: build.query<IAuthor[], ''>({
      query: () => ({
        url: 'authors',
        method: 'get',
      }),
    }),
    getLocations: build.query<ILocation[], ''>({
      query: () => ({
        url: 'locations',
        method: 'get',
      }),
    }),
  }),
});

export const {
  useGetPaintingsQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} = galleryApi;

export default galleryApi;
