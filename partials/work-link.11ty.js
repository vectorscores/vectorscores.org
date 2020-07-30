const { url } = require("eleventy-lib");

module.exports = (work) =>
  `<a href="${url.base("TODO", work.url)}" class="work-title">${
    work.title
  }</a>`;
