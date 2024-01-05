import { InfiniteData } from 'react-query';
import { IapiResponse, IapiResponsePages, IapiResponsePagesResults } from '../types';

const parceData = (data: IapiResponse | InfiniteData<any>) => {
  const helperArray: IapiResponsePagesResults[] = [];
  data?.pages.map((el: IapiResponsePages) => el.results.map((ele) => helperArray.push(ele)));
  return helperArray;
};

export default parceData;
