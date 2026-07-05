## Installing an unscoped package

Unscoped packages are public packages that can be downloaded, searched for, and 
installed by anyone. To install, simply run the command line:

```terminal
npm install <package_name>
```

This command will create the `node_modules` directory in the current directory.


## Installing a scoped public package

**Scoped public packages** can only be downloaded and installed by anyone, but 
the *scope name* (@scope/) is referenced during installation:

```terminal
npm install @scope/package-name
```

## Installing a private package (always scoped)

Private packages can only be downloaded and installed ONLY by the people who 
have been granted read access to the package. Private packages are always SCOPED
so must always reference the scope name (@scope/).


## Testing package installation

To confirm that `npm install` worked correctly in the *mode_modules* directory
using the the command: 

```terminal
ls node_modules
```

## Default npm installation with package.json

If there's a `package.json` file in the directory and `npm install` is run,
npm will install the latest package as declared in `package.json` file.

If there is no package.json file, w/e latest version of the package is installed
instead.
