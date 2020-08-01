const { catMap, maybe } = require("eleventy-lib");
const workLink = require("./work-link.11ty.js");

const filterByStatus = (works, status) =>
  works.filter((w) => w.status === status);

const hasFormat = (formats, format) =>
  formats != null && formats.includes(format);

const workRow = (baseUrl) => (d) => {
  const hasMovements = d.movements.length > 0;
  return `<tr class="work-list-row">
        <td>
          ${workLink(
            d.title,
            hasMovements ? d.url.replace("scores", "sets") : baseUrl + d.url
          )}${maybe(`, for ${d.instrumentation}`, d.instrumentation)}
        </td>
        <td class="work-list-duration">
            ${maybe(d.duration)}
        </td>
        <td class="work-list-duration">
            ${maybe((mvts) => `${mvts} mvts`, d.movements.length || null)}
        </td>
        <td class="work-list-formats">
            ${hasFormat(d.formats, "score") ? "score" : ""}
        </td>
        <td class="work-list-formats">
            ${hasFormat(d.formats, "parts") ? "parts" : ""}
        </td>
     </tr>`;
};

module.exports = (data) => {
  const { works } = data;

  return `
    <h3>Published</h3>
    <table class="work-list">
        ${catMap(
          workRow(data.site.scoreBaseUrl),
          filterByStatus(works, "published")
        )}
    </table>
    
    <h3>Works in progress</h3>
    <table class="work-list">
        ${catMap(workRow(data.site.scoreBaseUrl), filterByStatus(works, "wip"))}
    </table>
    
    <h3>Examples and tests</h3>
    <table class="work-list">
        ${catMap(
          workRow(data.site.scoreBaseUrl),
          filterByStatus(works, "test")
        )}
    </table>`;
};
