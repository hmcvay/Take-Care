export const getPostTime = time => {
  const secondsSince = new Date().getTime()/1000 - time.seconds;
  if (secondsSince < 60){
    return `${Math.floor(secondsSince)} seconds ago`;
  } else if (secondsSince / 60 < 60){
    return `${Math.floor(secondsSince /60)} minutes ago`;
  } else if (secondsSince / 3600 < 7){
    return`${Math.floor(secondsSince / 3600)} hours ${Math.floor(secondsSince % 60,)} minutes ago`;
  } else if (secondsSince / 3600 < 24) {
    return `${Math.floor(secondsSince / 3600)} hours ago`;
  } else {
    return `${Math.floor(secondsSince / 86400)} days ago`;
  }
};