function formatFileSize(size, convertTo) {
  if (convertTo.toLowerCase() === "mb") {
    return (size / (1024 * 1024)).toFixed(2) + "MB";
  }
  if (convertTo.toLowerCase() === "gb") {
    return (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  }
}

function formatModifiedOn(days) {
  var diffInSeconds = (new Date() - new Date(days)) / 1000;
  if (diffInSeconds % (60 * 60 * 24 * 7) > 1) {
    return Math.floor(diffInSeconds / (60 * 60 * 24 * 7)) + "weeks ago";
  }
  if (diffInSeconds % (60 * 60 * 24) > 1) {
    return Math.floor(diffInSeconds / (60 * 60 * 24)) + "days ago";
  }
  if (diffInSeconds % (60 * 60) > 1) {
    return Math.floor(diffInSeconds / (60 * 60)) + "hours ago";
  }
  if (diffInSeconds % 60 > 1) {
    return Math.floor(diffInSeconds / 60) + "minutes ago";
  }
  return Math.floor(diffInSeconds) + "seconds ago";
}
