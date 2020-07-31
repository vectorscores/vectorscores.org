const { catMap } = require("eleventy-lib");

module.exports = class {
  data() {
    return {
      pagination: {
        data: "works",
        size: 1,
        alias: "work",
      },
      permalink: (data) => `sets/${data.work.title}/`,
    };
  }
  //TODO need movement url (can get from using title to find in data
  //TODO url is currently title, needs to be slugified
  render(data) {
    return `<h1>${data.work.title}</h1>
<ul>
${catMap(
  (m) => `<li><a href="/scores/${m}">${m}</a></li>`,
  data.work.movements
)}
</ul>
`;
  }
};
