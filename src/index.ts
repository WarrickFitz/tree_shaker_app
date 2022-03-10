import { add2 } from "tree_shaker_dependency_1"
import {importme2add, mock} from "tree_shaker_dependency_2"
console.log("Hello World!");
console.log(add2(1,2));
console.log(importme2add(1,2));
// console.log(mock);
