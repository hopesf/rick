import { IapiResponsePagesResults } from '../types';
import parceData from './parceData';

const checkSelected = (data: any, selectedOptions: string[]) => {
  const helperArray: IapiResponsePagesResults[] = [];
  const result: IapiResponsePagesResults[] = parceData(data);

  result.forEach((item) => {
    helperArray.push({ ...item, selected: !!selectedOptions.includes(item.name) });
  });

  console.log('helperArray', helperArray);
  return helperArray;
};

export default checkSelected;
