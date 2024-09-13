export function timelineDateFormatting(date: Date | undefined): string {
  if (!date) {
    date = new Date();
  }
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
