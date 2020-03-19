const Replacer = {};

Replacer.replaceAll = (string, search, replacement) =>
  string.split(search).join(replacement);

Object.freeze(Replacer);

export default Replacer;
