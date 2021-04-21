(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.StringUtilities = factory());
}(this, (function () { 'use strict';

  const Extractor = {};

  Extractor.after = (string, key, isLast, isInclusive) => {
    let answer = string;

    const index = isLast ? string.lastIndexOf(key) : string.indexOf(key);

    if (index > 0) {
      answer = isInclusive
        ? string.substring(index)
        : string.substring(index + key.length);
    }

    return answer;
  };

  Extractor.before = (string, key, isLast, isInclusive) => {
    let answer = string;

    const index = isLast ? string.lastIndexOf(key) : string.indexOf(key);

    if (index > 0) {
      answer = isInclusive
        ? string.substring(0, index + key.length)
        : string.substring(0, index);
    }

    return answer;
  };

  Extractor.between = (
    string,
    key1,
    key2,
    isLast = false,
    isInclusive = false
  ) => {
    const string2 = Extractor.after(string, key1, isLast, isInclusive);

    return Extractor.before(string2, key2, isLast, isInclusive);
  };

  Extractor.list = (string, key1, key2, isInclusive = false) => {
    let answer;
    const lines = string.split(key1);

    if (lines.length > 1) {
      const reduceFunction = (accum, line) => {
        if (line.includes(key2)) {
          const line2 = Extractor.before(line, key2, true, isInclusive);
          accum.push(isInclusive ? key1 + line2 : line2);
        }
        return accum;
      };
      answer = lines.reduce(reduceFunction, []);
    } else {
      answer = [string];
    }

    return answer;
  };

  Object.freeze(Extractor);

  const Replacer = {};

  Replacer.replaceAll = (string, search, replacement) =>
    string.split(search).join(replacement);

  Object.freeze(Replacer);

  const XMLExtractor = {};

  XMLExtractor.anchorContent = anchor => XMLExtractor.tagContent(anchor, "a");

  XMLExtractor.anchorHref = anchor =>
    XMLExtractor.tagAttribute(anchor, "a", "href");

  XMLExtractor.tagAttribute = (string, tag, attr) => {
    const key1 = `<${tag}`;
    const key2 = ">";
    const string2 = Extractor.between(string, key1, key2, false, true);

    const includesQuote = string2.includes(`${attr}="`);
    const key3 = includesQuote ? `${attr}="` : `${attr}='`;
    const key4 = includesQuote ? '"' : "'";

    return Extractor.between(string2, key3, key4);
  };

  XMLExtractor.tagContent = (string, tag) => {
    const key1 = `<${tag}`;
    const string2 = Extractor.after(string, key1, false, true);
    const key2 = `</${tag}>`;

    return Extractor.between(string2, ">", key2);
  };

  Object.freeze(XMLExtractor);

  const StringUtilities = {};

  StringUtilities.Extractor = Extractor;
  StringUtilities.Replacer = Replacer;
  StringUtilities.XMLExtractor = XMLExtractor;

  Object.freeze(StringUtilities);

  return StringUtilities;

})));
