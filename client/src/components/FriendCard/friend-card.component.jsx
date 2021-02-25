import { Card, CardContent, Typography } from "@material-ui/core";

const FriendCard = ({ friend }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6">
            {friend.name.first} {friend.name.last}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FriendCard;
