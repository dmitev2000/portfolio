export const openUrl = (url: string, newTab: boolean = true) => {
  window.open(url, newTab ? "_blank" : "_self");
};
