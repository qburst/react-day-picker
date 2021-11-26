// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'index',
    'start',
    {
      Guides: [
        'basics/navigation',
        'basics/customization',
        'basics/selecting-days',
        'basics/styling'
      ]
    },
    {
      'Advanced Guides': [
        'guides/modifiers',
        'guides/formatters',
        'guides/localization',
        'guides/input-fields',
        'guides/custom-components',
        'guides/custom-selections'
      ]
    },
    'changelog',
    'license'
  ],
  developmentSidebar: [
    'development/index',
    'development/source',
    'development/docs',
    'development/code-of-conduct'
  ],
  apiSidebar: [
    {
      type: 'autogenerated',
      dirName: 'api' // 'api' is the 'out' directory
    }
  ]
};

module.exports = sidebars;
