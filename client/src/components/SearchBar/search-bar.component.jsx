import { TextField, FormControl, InputBase, Paper, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ handleInput }) => {
  return (
    <Paper>
      <InputBase placeholder="Search for a friend" />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
