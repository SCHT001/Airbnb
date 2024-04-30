export const calculateIntermediateDates = (startDate: Date, endDate: Date) => {
  // Convert the provided strings to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds between the two dates
  //   console.log(start.getTime(), end.getTime());
  const difference = end.getTime() - start.getTime();

  // Calculate the number of milliseconds in a day
  const oneDay = 24 * 60 * 60 * 1000;

  // Store the intermediate dates
  const intermediateDates = [];

  // Loop through and calculate the intermediate dates
  for (let i = 0; i < difference / oneDay; i++) {
    const intermediateDate = new Date(start.getTime() + i * oneDay);
    intermediateDates.push(intermediateDate.toISOString());
  }
  return intermediateDates;
};
