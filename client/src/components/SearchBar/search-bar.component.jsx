import { TextField, FormControl } from "@material-ui/core";

const SearchBar = ({ handleInput }) => {
  return (
    <FormControl fullWidth>
      <TextField id="search" label="Search for friends" />
    </FormControl>
  );
};

export default SearchBar;
