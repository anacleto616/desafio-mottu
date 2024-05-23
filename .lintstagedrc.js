module.exports = {
  '*.{ts,html}': ['eslint --fix', 'prettier --write'],
  '*.{json,scss,md}': ['prettier --write'],
};
