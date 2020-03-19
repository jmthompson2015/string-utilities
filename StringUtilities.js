import Extractor from "./src/Extractor.js";
import Replacer from "./src/Replacer.js";
import XMLExtractor from "./src/XMLExtractor.js";

const StringUtilities = {};

StringUtilities.Extractor = Extractor;
StringUtilities.Replacer = Replacer;
StringUtilities.XMLExtractor = XMLExtractor;

Object.freeze(StringUtilities);

export default StringUtilities;
