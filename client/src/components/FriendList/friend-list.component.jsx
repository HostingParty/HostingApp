import { Card, CardContent, Typography } from "@material-ui/core";
import FriendCard from "../FriendCard/friend-card.component";
import SearchBar from "../SearchBar/search-bar.component";

const FriendList = ({ friends }) => {
  const handleInput = () => {};

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Friends List</Typography>
        <SearchBar />
        {friends &&
          friends.map((friend) => {
            return <FriendCard key={friend._id} friend={friend} />;
          })}
      </CardContent>
    </Card>
  );
};

export default FriendList;
