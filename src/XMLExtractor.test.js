import XMLExtractor from "./XMLExtractor.js";

QUnit.module("XMLExtractor");

const STRING1 = '<a href="www.google.com">Google Search</a>';
const STRING2 = "<a href='www.google.com'>Google Search</a>";
const STRING3 = "<a href='www.cnn.com'><span color='blue'>CNN</span></a>";
const STRING4 = "<span color='blue'>CNN</span>";

QUnit.test("anchorContent 1", assert => {
  // Run.
  const result = XMLExtractor.anchorContent(STRING1);

  // Verify.
  assert.equal(result, "Google Search");
});

QUnit.test("anchorContent 2", assert => {
  // Run.
  const result = XMLExtractor.anchorContent(STRING2);

  // Verify.
  assert.equal(result, "Google Search");
});

QUnit.test("anchorContent 3", assert => {
  // Run.
  const result = XMLExtractor.anchorContent(STRING3);

  // Verify.
  assert.equal(result, "<span color='blue'>CNN</span>");
});

QUnit.test("anchorHref 1", assert => {
  // Run.
  const result = XMLExtractor.anchorHref(STRING1);

  // Verify.
  assert.equal(result, "www.google.com");
});

QUnit.test("anchorHref 2", assert => {
  // Run.
  const result = XMLExtractor.anchorHref(STRING2);

  // Verify.
  assert.equal(result, "www.google.com");
});

QUnit.test("anchorHref 3", assert => {
  // Run.
  const result = XMLExtractor.anchorHref(STRING3);

  // Verify.
  assert.equal(result, "www.cnn.com");
});

QUnit.test("tagAttribute 1", assert => {
  // Run.
  const result = XMLExtractor.tagAttribute(STRING1, "a", "href");

  // Verify.
  assert.equal(result, "www.google.com");
});

QUnit.test("tagAttribute 2", assert => {
  // Run.
  const result = XMLExtractor.tagAttribute(STRING2, "a", "href");

  // Verify.
  assert.equal(result, "www.google.com");
});

QUnit.test("tagAttribute 3", assert => {
  // Run.
  const result = XMLExtractor.tagAttribute(STRING3, "span", "color");

  // Verify.
  assert.equal(result, "blue");
});

QUnit.test("tagContent 1", assert => {
  // Run.
  const result = XMLExtractor.tagContent(STRING1, "a");

  // Verify.
  assert.equal(result, "Google Search");
});

QUnit.test("tagContent 2", assert => {
  // Run.
  const result = XMLExtractor.tagContent(STRING2, "a");

  // Verify.
  assert.equal(result, "Google Search");
});

QUnit.test("tagContent 3", assert => {
  // Run.
  const result = XMLExtractor.tagContent(STRING3, "a");

  // Verify.
  assert.equal(result, "<span color='blue'>CNN</span>");
});

const XMLExtractorTest = {};
export default XMLExtractorTest;
