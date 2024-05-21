module.exports = {
  '*.{ts,html}': ['eslint --fix', 'prettier --write'],
  '*.{json,css,scss,less,md}': ['prettier --write'],
};
