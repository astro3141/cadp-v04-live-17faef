import assert from "node:assert/strict";
import test from "node:test";
import { mean, product } from "../src/stats.mjs";

test("mean of empty is 0", () => assert.equal(mean([]), 0));
test("mean averages", () => assert.equal(mean([2, 4]), 3));
test("product of empty is 1", () => assert.equal(product([]), 1));
test("product multiplies", () => assert.equal(product([2, 3, 4]), 24));
