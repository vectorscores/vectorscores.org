const { catMap } = require("eleventy-lib");

module.exports = class {
  data() {
    return {
      pagination: {
        data: "sets",
        size: 1,
        alias: "work",
      },
      permalink: (data) => `/${data.work.url.replace("scores", "sets")}/`,
    };
  }
  // TODO change base url to scores site
  render(data) {
    return `<h1>${data.work.title}</h1>
<ul>
${catMap(
  (m) => `<li><a href="${data.site.scoreBaseUrl + m.url}">${m.title}</a></li>`,
  data.work.movements
)}
</ul>
`;
  }
};
