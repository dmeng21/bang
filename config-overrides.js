const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: {'@layout-header-background': '#fff',
                '@primary-color': '#f2a55e',
                '@menu-dark-item-active-bg':'#fff',
                '@menu-dark-color':'#7c7e7f',
                '@menu-dark-highlight-color':'#f2a55e'},
  }),
);