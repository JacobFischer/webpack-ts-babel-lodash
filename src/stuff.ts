import capitalize from "lodash-es/capitalize";
import flatMap from "lodash-es/flatMap";
import mapValues from "lodash-es/mapValues";

// "this is an example file that does some logic by importing code");

const stuff = ["foo", "bar", "baz", ["fish", "soup"], "cat", ["dog"]];

export const mapped = mapValues(flatMap(stuff), capitalize);
