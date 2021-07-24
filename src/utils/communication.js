const Communication = (url) => {
  return fetch(url).then((res) => res.json());
};

export default Communication;
