const { catMap } = require("eleventy-lib");
const workLink = require("./partials/work-link.11ty.js");

module.exports = class {
  data() {
    return {
      layout: "default", // TODO h1 does not appear in the same place as 'page'
      pagination: {
        data: "sets",
        size: 1,
        alias: "work",
      },
      permalink: (data) => `/${data.work.url.replace("scores", "sets")}/`,
    };
  }
  render(data) {
    return `
<h1>${data.work.title}</h1>
<ul>
      ${catMap(
        (m) => `<li>
          ${workLink(m.title, data.site.scoreBaseUrl + m.url)}
        </li>`,
        data.work.movements
      )}
</ul>`;
  }
};
