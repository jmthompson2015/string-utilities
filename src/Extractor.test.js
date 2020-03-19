import Extractor from "./Extractor.js";

QUnit.module("Extractor");

const STRING1 =
  "Governor Tarkin, I should’ve expected to find you holding Vader’s leash. " +
  "I recognized your foul stench when I was brought on board.";
const STRING2 =
  "<ul>" +
  "<li>Han Solo</li>" +
  "<li>Leia Organa</li>" +
  "<li>Luke Skywalker</li>" +
  "</ul>";

QUnit.test("after first inclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.after(STRING1, key, false, true);

  // Verify.
  assert.equal(
    result,
    " I should’ve expected to find you holding Vader’s leash. " +
      "I recognized your foul stench when I was brought on board."
  );
});

QUnit.test("after first exclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.after(STRING1, key);

  // Verify.
  assert.equal(
    result,
    "should’ve expected to find you holding Vader’s leash. " +
      "I recognized your foul stench when I was brought on board."
  );
});

QUnit.test("after last inclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.after(STRING1, key, true, true);

  // Verify.
  assert.equal(result, " I was brought on board.");
});

QUnit.test("after last exclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.after(STRING1, key, true, false);

  // Verify.
  assert.equal(result, "was brought on board.");
});

QUnit.test("before first inclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.before(STRING1, key, false, true);

  // Verify.
  assert.equal(result, "Governor Tarkin, I ");
});

QUnit.test("before first exclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.before(STRING1, key);

  // Verify.
  assert.equal(result, "Governor Tarkin,");
});

QUnit.test("before last inclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.before(STRING1, key, true, true);

  // Verify.
  assert.equal(
    result,
    "Governor Tarkin, I should’ve expected to find you holding Vader’s leash. " +
      "I recognized your foul stench when I "
  );
});

QUnit.test("before last exclusive", assert => {
  // Setup.
  const key = " I ";

  // Run.
  const result = Extractor.before(STRING1, key, true);

  // Verify.
  assert.equal(
    result,
    "Governor Tarkin, I should’ve expected to find you holding Vader’s leash. " +
      "I recognized your foul stench when"
  );
});

QUnit.test("between first inclusive", assert => {
  // Setup.
  const key1 = "you";
  const key2 = ".";

  // Run.
  const result = Extractor.between(STRING1, key1, key2, false, true);

  // Verify.
  assert.equal(result, "you holding Vader’s leash.");
});

QUnit.test("between first exclusive", assert => {
  // Setup.
  const key1 = "you";
  const key2 = ".";

  // Run.
  const result = Extractor.between(STRING1, key1, key2);

  // Verify.
  assert.equal(result, " holding Vader’s leash");
});

QUnit.test("between last inclusive", assert => {
  // Setup.
  const key1 = "you";
  const key2 = ".";

  // Run.
  const result = Extractor.between(STRING1, key1, key2, true, true);

  // Verify.
  assert.equal(result, "your foul stench when I was brought on board.");
});

QUnit.test("between last exclusive", assert => {
  // Setup.
  const key1 = "you";
  const key2 = ".";

  // Run.
  const result = Extractor.between(STRING1, key1, key2, true);

  // Verify.
  assert.equal(result, "r foul stench when I was brought on board");
});

QUnit.test("list inclusive", assert => {
  // Setup.
  const key1 = "<li>";
  const key2 = "</li>";

  // Run.
  const result = Extractor.list(STRING2, key1, key2, true);

  // Verify.
  assert.equal(result.length, 3);
  assert.equal(result[0], "<li>Han Solo</li>");
  assert.equal(result[1], "<li>Leia Organa</li>");
  assert.equal(result[2], "<li>Luke Skywalker</li>");
});

QUnit.test("list exclusive", assert => {
  // Setup.
  const key1 = "<li>";
  const key2 = "</li>";

  // Run.
  const result = Extractor.list(STRING2, key1, key2);

  // Verify.
  assert.equal(result.length, 3);
  assert.equal(result[0], "Han Solo");
  assert.equal(result[1], "Leia Organa");
  assert.equal(result[2], "Luke Skywalker");
});

const ExtractorTest = {};
export default ExtractorTest;
