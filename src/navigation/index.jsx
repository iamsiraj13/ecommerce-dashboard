import { allNavs } from "./allNav";

export const getNavs = (role) => {
  const finalNavs = [];

  for (let i = 0; i < allNavs.length; i++) {
    if (role === allNavs[i].role) {
      finalNavs.push(allNavs[i]);
    }
  }
  return finalNavs;
};
