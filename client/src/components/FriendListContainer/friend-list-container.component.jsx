import { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import FriendList from "../FriendList/friend-list.component";
import SearchBar from "../SearchBar/search-bar.component";
import Alert from "@material-ui/lab/Alert";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/globalState";

const FriendListContainer = ({ friends, userId }) => {
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

  const handleCancel = (e) => {
    setSearchResult({ showFriends: true, results: [] });
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
        <Typography variant="h4">Your Friends</Typography>

        {error.show && (
          <Alert variant="outlined" severity="warning">
            {error.message}
          </Alert>
        )}

        <SearchBar handleInput={handleInput} handleSubmit={handleSubmit} handleCancel={handleCancel} />

        {/* Search Result Friends. Show when searching */}
        {searchResult.results && <FriendList friendsArray={searchResult.results} addFriend={addFriend} />}

        {/* Current User Friends. Show when not searching */}
        {friends && searchResult.showFriends && <FriendList friendsArray={friends} />}
      </CardContent>
    </Card>
  );
};

export default FriendListContainer;
