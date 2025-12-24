export const formatDuration = (start: number, end: number) => {
  const durationInSeconds = Math.floor((end - start) / 1000);
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');

  if (hours > 0) {
    return `${paddedMinutes} minutes ${paddedSeconds} seconds`;
  } else if (minutes > 0) {
    return `${paddedMinutes} minutes ${paddedSeconds} seconds`;
  } else {
    return `${paddedSeconds} seconds`;
  }
};
