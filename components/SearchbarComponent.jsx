import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchbarComponent = ({placeholder,onChangeText ,value}) => {

return (
<Searchbar placeholder={placeholder} onChangeText={onChangeText} value={value} />
);
};

export default SearchbarComponent;
