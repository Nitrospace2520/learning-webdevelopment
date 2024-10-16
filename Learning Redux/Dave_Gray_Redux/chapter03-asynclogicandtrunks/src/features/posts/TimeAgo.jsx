/* eslint-disable react/prop-types */
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <small title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </small>
  );
};

export default TimeAgo;
