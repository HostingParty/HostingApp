import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: 8,
    display: "flex",
    padding: 8,
    paddingBottom: 8,
  },
}));

const FriendCard = ({ friend, addFriend }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Typography variant="h6">
          {friend?.name?.first} {friend?.name?.last}
        </Typography>

        {/* Adds a button if passed addFriend function */}
        {addFriend && (
          <Button
            onClick={() => {
              addFriend(friend?._id);
            }}
          >
            Add
          </Button>
        )}
      </Card>
    </>
  );
};

export default FriendCard;
