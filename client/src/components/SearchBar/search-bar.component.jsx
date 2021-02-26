import { InputBase, Paper, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ handleInput, handleSubmit, handleCancel }) => {
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
        <Button
          onClick={(e) => {
            handleCancel(e);
          }}
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
};

export default SearchBar;
