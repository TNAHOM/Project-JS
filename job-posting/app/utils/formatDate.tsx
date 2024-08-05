export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'long' }); // e.g., "July"
  const year = date.getFullYear();
  return `${month} ${year}`;
};