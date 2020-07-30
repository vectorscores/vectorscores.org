module.exports = class {
  data() {
    return {
      title: "404",
      layout: "page",
      permalink: "/404.html",
    };
  }

  render() {
    return `Page not found.`;
  }
};
