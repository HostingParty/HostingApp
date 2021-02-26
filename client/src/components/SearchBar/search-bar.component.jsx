import { InputBase, Paper, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ handleInput, handleSubmit }) => {
  return (
    <Paper>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <InputBase
          placeholder="Search for a friend"
          name="searchInput"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </form>
    </Paper>
  );
};

export default SearchBar;
