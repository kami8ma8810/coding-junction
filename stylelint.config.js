module.exports = {
  extends: [
    'stylelint-declaration-block-no-ignored-properties', //無意味なプロパティを通知（ex.インライン要素にwidth
    // 'stylelint-config-standard',
    // 'stylelint-config-standard-scss',
    // 'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'color-hex-case': 'lower',
    'string-quotes': 'double',
    'selector-pseudo-element-colon-notation': 'double',
  },
}
