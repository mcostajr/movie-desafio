export function convertDurationToTimeString(duration: number) {
  const hours = String(Math.floor(duration / 60))
  const minutes = String(Math.floor((duration % 60)))

  const timeString = [hours, minutes]
      .join('h ')
      .concat('min')

  return timeString;
}