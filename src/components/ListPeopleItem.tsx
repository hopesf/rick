import { IListPeopleItemProps } from '../types';
import highlightQuery from '../utils/highlightQuery';

export default function ListPeopleItem({ item, query }: IListPeopleItemProps) {
  return (
    <div className="flex w-full items-center space-x-4 p-3 border-b-2 last:border-b-0 border-gray-300">
      <input type="checkbox" className="w-5 h-5" checked={item.selected} />
      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md" />
      <div className="flex flex-col">
        <span className="text-lg text-gray-800 line-clamp-1">
          {highlightQuery(item.name, query)}
        </span>
        <span className="text-gray-700 text-sm font-light">
          {item.episode ? item.episode.length : 0} Episodes
        </span>
      </div>
    </div>
  );
}
