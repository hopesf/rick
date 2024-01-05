import React from 'react';
import Select, { MultiValue } from 'react-select';
import { ISearchPeopleProps, ISelectOption, IapiResponsePagesResults } from '../types';

const SearchPeople = React.memo(
  ({ listData, setSelectedOptions, setQuery }: ISearchPeopleProps) => {
    const options: ISelectOption[] = listData.map((el: IapiResponsePagesResults) => ({
      value: el.name,
      label: el.name,
    }));

    const optionsShort = options.sort((a, b) => a.label.localeCompare(b.label));

    const onChangeHandle = (selected: MultiValue<ISelectOption>) => {
      const convertedSelected = selected.map((el) => el.value);
      setSelectedOptions(convertedSelected);
    };
    const onInputChange = (inputValue: string) => {
      setQuery(inputValue);
    };

    return (
      <Select
        isMulti
        options={optionsShort}
        onInputChange={onInputChange}
        className="w-full"
        onChange={(e) => console.log(e)}
      />
    );
  },
);

export default SearchPeople;
