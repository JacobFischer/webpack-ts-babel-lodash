import { capitalize, flatMap } from "lodash";
// import capitalize from "lodash-es/capitalize";
// import flatMap from "lodash-es/flatMap";
// import mapValues from "lodash-es/mapValues";

// "this is an example file that does some logic by importing code");

const stuff = ["foo", "bar", "baz", ["fish", "soup"], "cat", ["dog"], 'pizza!'];

export const mapped = flatMap(stuff).map(capitalize);
