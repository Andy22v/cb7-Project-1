const cE = (element) => document.createElement(element);

export const falseCart = (users) => {
  const wrapperEl = cE("div");
  const contactListEl = cE("ul");
  const listEl = cE("li");
  const titleEl = cE("p");

  wrapperEl.className = "false-contact";
  contactListEl.className = "list-container";
  listEl.className = "list-cart";

  titleEl.className = "title-cart";
  titleEl.textContent = users.title;

  listEl.append(titleEl);
  contactListEl.append(listEl);
  wrapperEl.append(contactListEl);

  return wrapperEl;
};

export const trueCart = (users) => {
  const wrapperEl = cE("div");
  const contactListEl = cE("ul");
  const listEl = cE("li");
  const titleEl = cE("p");

  wrapperEl.className = "true-contact";
  contactListEl.className = "list-container";
  listEl.className = "list-cart";

  titleEl.className = "title-cart";
  titleEl.textContent = users.title;

  listEl.append(titleEl);
  contactListEl.append(listEl);
  wrapperEl.append(contactListEl);

  return wrapperEl;
};
