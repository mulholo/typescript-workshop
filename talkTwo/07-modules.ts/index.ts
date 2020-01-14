/* =========================================================
   07 - Modules
========================================================= */

// TypeScript uses ECMAScript2015 modules

// Imports go at the top of the file

import defaultExportWhichCanBeCalledAnything from "./defaultExport";
import {
  namedExportOne,
  namedExportTwo
} from "./namedExports";
// node_modules imported in the same way
import "vanilla-javascript";
// If a module has types itself of there is an @types pkg
// then you don't need to type it; import itself is fine
// (Provided you do `yarn add --dev @types/react`)
import { createElement } from "react";
// Otherwise, you will need to manually type the package:
import createIpsum from "corporate-ipsum";

// Ignore below this line ----------------------------------

createIpsum();
createElement("h1");
defaultExportWhichCanBeCalledAnything();
namedExportOne;
namedExportTwo;
