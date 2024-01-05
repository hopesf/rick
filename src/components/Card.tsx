import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';

import ListPeople from './ListPeople';
import SearchPeople from './SearchPeople';
import api from '../services/api';
import parceData from '../utils/parceData';
import checkSelected from '../utils/checkSelected';

export default function CardContent() {
  const [query, setQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // filte varsa ona göre api'den veri çekecek, yoksa normal çekecek.
  // Burda böyle yapma sebebim filtrelenmiş verilerde pagination sisteminde olsun istemem.
  const fetchCharacters = ({ pageParam = 1 }) =>
    query.length > 0
      ? api.getCharactersByName(query, pageParam.toString())
      : api.getAllCharacters(pageParam.toString());

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery(
    ['allItems', query],
    fetchCharacters,
    {
      getNextPageParam: (lastPage, pages) => (lastPage.info.next ? pages.length + 1 : undefined),
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  // divin scroll eventi izleniyor ve sonuna gelindiğinde tekrardan veri çekiliyor.
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 lg:max-h-1/2 p-5 bg-gray-50 space-y-5 shadow-sm flex flex-col items-center justify-center mx-auto rounded-md border">
      {/* multiselect ve search inputu */}
      <SearchPeople
        listData={data ? parceData(data) : []}
        setSelectedOptions={setSelectedOptions}
        setQuery={setQuery}
      />

      {/* listelenen veriler */}
      <ListPeople
        data={checkSelected(data, selectedOptions)}
        handleScroll={handleScroll}
        status={status}
        query={query}
      />
    </div>
  );
}
