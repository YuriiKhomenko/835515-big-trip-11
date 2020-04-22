const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const createNodeElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.firstChild;
};

export {render, createNodeElement};
