module.exports = function(config) {
  config.addPassthroughCopy("assets");

  const pageLayouts = ["default", "page"];
  pageLayouts.forEach(template =>
    config.addLayoutAlias(template, `${template}.11ty.js`)
  );

  config.setBrowserSyncConfig({
    codeSync: false,
    ghostMode: false
  });

  return {
    dir: {
      input: "./",
      output: "./_site",
      layouts: "layouts"
    }
  };
};
