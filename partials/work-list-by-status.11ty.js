const { catMap, maybe } = require("eleventy-lib");

const workLink = (work, baseUrl) =>
  `<a href="${baseUrl + work.url}" class="work-title">${
    work.title
  }</a>`;

const filterByStatus = (works, status) =>
  works.filter((w) => w.status === status);
const hasFormat = (d, format) =>
  d.formats && d.formats.includes(format);

const workRow = baseUrl => (d) =>
  `<tr class="work-list-row">
        <td>
          ${workLink(d, baseUrl)}${maybe(
    `, for ${d.instrumentation}`,
    d.instrumentation
  )}
        </td>
        <td class="work-list-duration">
            ${maybe(d.duration)}
        </td>
        <td class="work-list-duration">
            ${maybe(
              (mvts) => `${mvts} mvts`,
              d.movements.length
            )}
        </td>
        <td class="work-list-formats">
            ${maybe("score", hasFormat(d, "score"))}
        </td>
        <td class="work-list-formats">
            ${maybe("parts", hasFormat(d, "parts"))}
        </td>
     </tr>`;

module.exports = (data) => {
  const { works } = data

  return `
    <h3>Published</h3>
    <table class="work-list">
        ${catMap(workRow(data.site.scoreBaseUrl), filterByStatus(works, "published"))}
    </table>
    
    <h3>Works in progress</h3>
    <table class="work-list">
        ${catMap(workRow(data.site.scoreBaseUrl), filterByStatus(works, "wip"))}
    </table>
    
    <h3>Examples and tests</h3>
    <table class="work-list">
        ${catMap(workRow(data.site.scoreBaseUrl), filterByStatus(works, "test"))}
    </table>`;
};
