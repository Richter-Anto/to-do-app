const app = {
  title: "Time to Hack",
  url: "https://time2hack.com",
  logo: "https://cloudinary.time2hack.com/upload/q_auto:good/t2h-text-banner.png",
};

const config = {
  sortBy: "createdOn",
  sortOrder: "DESC",
};

const sorters = {
  ASC: (a, b) => a[config.sortBy] - b[config.sortBy],
  DESC: (a, b) => b[config.sortBy] - a[config.sortBy],
};

const sorter = sorters[config.sortOrder];

export default {
  ...config,
  app,
  sorter,
};
