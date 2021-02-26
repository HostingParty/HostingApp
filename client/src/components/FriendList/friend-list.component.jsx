import FriendCard from "../FriendCard/friend-card.component";

const FriendList = ({ friendsArray, addFriend }) => {
  return friendsArray.map((friend) => {
    return <FriendCard key={friend._id} friend={friend} addFriend={addFriend} />;
  });
};

export default FriendList;
