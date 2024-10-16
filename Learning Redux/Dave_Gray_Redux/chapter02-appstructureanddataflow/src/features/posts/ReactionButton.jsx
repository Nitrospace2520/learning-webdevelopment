import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postsSlice";

const reactionsEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionsEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionsAdded({ postID: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

ReactionButton.propTypes = {
  post: PropTypes.object.isRequired,
};
export default ReactionButton;
