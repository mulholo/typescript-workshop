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

// Ignore below this line ----------------------------------

defaultExportWhichCanBeCalledAnything();
namedExportOne;
namedExportTwo;
