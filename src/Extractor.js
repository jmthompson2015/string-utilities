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

export default Extractor;
