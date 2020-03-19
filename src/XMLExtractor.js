import Extractor from "./Extractor.js";

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

export default XMLExtractor;
