import { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import FriendCard from "../FriendCard/friend-card.component";
import SearchBar from "../SearchBar/search-bar.component";
import Alert from "@material-ui/lab/Alert";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/globalState";

const FriendList = ({ friends, userId }) => {
  const [searchResult, setSearchResult] = useState({ showFriends: true, results: [] });
  const [searchInput, setSearchInput] = useState();
  const [error, setError] = useState({ show: false, message: "" });
  const [state, dispatch] = useStoreContext();

  const handleInput = (e) => {
    let input = e.target.value;
    setSearchInput({ ...searchInput, input });
    setSearchResult({ showFriends: true, results: [] });
    setError({ show: false, message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.searchInput.value = "";

    console.log(searchInput.input);

    API.searchForUser(searchInput.input)
      .then((data) => {
        console.log(data.data.data);
        setSearchResult({ showFreinds: false, results: data.data.data });
      })
      .catch((err) => {
        setError({ show: true, message: "User not found" });
      });
  };

  const addFriend = (friendId) => {
    API.addFriend(userId, friendId)
      .then((data) => {
        dispatch({ type: "SET_USER", payload: data.data.data });
      })
      .catch((err) => {
        console.log(err);
      });

    setSearchResult({ showFriends: true, results: [] });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Friends List</Typography>
        {error.show && (
          <Alert variant="outlined" severity="warning">
            {error.message}
          </Alert>
        )}
        <SearchBar handleInput={handleInput} handleSubmit={handleSubmit} />

        {/* Search Result Friends. Show when searching */}
        {searchResult.results &&
          searchResult.results.map((friend) => {
            return <FriendCard key={friend._id} friend={friend} addFriend={addFriend} />;
          })}

        {/* Current User Friends. Show when not searching */}
        {friends &&
          searchResult.showFriends &&
          friends.map((friend) => {
            return <FriendCard key={friend._id} friend={friend} />;
          })}
      </CardContent>
    </Card>
  );
};

export default FriendList;
