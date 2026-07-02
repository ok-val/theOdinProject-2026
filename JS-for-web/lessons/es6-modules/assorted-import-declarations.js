// The static import declaration is used to import live bindings as READ-ONLY,
// meaning that these bindings, exported by another module, cannot be assigned by the importer.
// However, it remains live-bindings because they can be reassigned by the exporter, 
// the code where the original variable was created.

// Modules are automatically interpreted using strict mode,
// meaning that all references using `this` must be received by the original receiver,
// and that `this` cannot be automatically reassigned.  


// These are the available syntaxes for importing:

import defaultExport from "mod.js"; // note that defaultExport is just an arbitary name
import * as name from "mod.js";
import { export1 } from "mod.js";
import { export1 as alias1 } from "mod.js";
import { default as alias } from "mod.js";
import { export1, export2 } from "mod.js";
import { export1, export2 as alias2 } from "mod.js";
import { "string name" as alias } from "mod.js";
import defaultExport, { export1 } from "mod.js";
import defaultExport, * as name from "mod.js";
// simply loads and executes the code of the module, 
// but brings nothing into the current scope
import "mod.js"; 



