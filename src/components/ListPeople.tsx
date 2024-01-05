import React from 'react';

import ListPeopleItem from './ListPeopleItem';
import { IListPeopleProps, IlistItem } from '../types';
import Loading from './Loading';
import Error from './Error';

const ListPeople = ({ data, handleScroll, status, query }: IListPeopleProps) => {
  console.log(data, 'ououo');
  return (
    <div
      className="max-h-[520px] overflow-y-auto w-full border rounded-lg border-gray-300"
      onScroll={(e) => handleScroll(e)}
    >
      {status === 'error' && (
        <Error msg={'Bir sorun oluştu, lütfen internet bağlantınızı kontrol ediniz.'} />
      )}
      {status === 'loading' && <Loading />}
      {data.map((item: IlistItem) => (
        <ListPeopleItem key={item.id} item={item} query={query} />
      ))}
    </div>
  );
};

export default ListPeople;
