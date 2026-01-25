export const getUrlSegments = (url: string): string[] => {
  if (!url) return [];
  const splitUrl = url.split("/").filter(Boolean) as string[];
  // get rid of the first 2 items (http and domain)
  return splitUrl.slice(2);
};
