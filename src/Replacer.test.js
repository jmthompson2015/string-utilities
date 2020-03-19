import Replacer from "./Replacer.js";

QUnit.module("Replacer");

const STRING1 =
  "Governor Tarkin, I should’ve expected to find you holding Vader’s leash. " +
  "I recognized your foul stench when I was brought on board.";
// const STRING2 =
//   "<ul>" +
//   "<li>Han Solo</li>" +
//   "<li>Leia Organa</li>" +
//   "<li>Luke Skywalker</li>" +
//   "</ul>";

QUnit.test("after first inclusive", assert => {
  // Setup.
  const key = "I";

  // Run.
  const result = Replacer.replaceAll(STRING1, key, "Leia");

  // Verify.
  assert.equal(
    result,
    "Governor Tarkin, Leia should’ve expected to find you holding Vader’s leash. " +
      "Leia recognized your foul stench when Leia was brought on board."
  );
});

const ReplacerTest = {};
export default ReplacerTest;
