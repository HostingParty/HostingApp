import { InputBase, Paper, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";

const styles = (theme) => ({
  mb: {
    marginTop: 8,
    marginBottom: 16,
  },
  px: {
    paddingLeft: 16,
    paddingright: 16,
  },
});

const SearchBar = ({ handleInput, handleSubmit, handleCancel, classes }) => {
  return (
    <Paper className={classes.mb}>
      <form
        className={classes.px}
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

export default withStyles(styles)(SearchBar);
