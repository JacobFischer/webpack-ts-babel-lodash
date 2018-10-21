import { capitalize, flatMap, mapValues } from "lodash-es";

// "this is an example file that does some logic by importing code");

const stuff = ["foo", "bar", "baz", ["fish", "soup"], "cat", ["dog"]];

export const mapped = mapValues(flatMap(stuff).map(capitalize), v => v);

