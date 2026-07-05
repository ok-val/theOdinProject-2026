## Creating a package.json file
Source: https://docs.npmjs.com/creating-a-package-json-file


Adding a `package.json` file makes it easier for others to manage and install
packages. Any packages published to the registry must contain a `package.json`.

Here's what the `package.json` file should include:
* Lists the packages your project depends on
* Specifies versions of the packages your project uses
* Makes your build reproducible and thereby easier to share with others


### Fields for the package.json

Entries marked with (*) are mandatory.

* "name" (*): must be in lowercase, may contain hyphens, dots, and underscores,
but no spaces.
* "version" (*): must in the form of `x.x.x` and follow the semantic versioning
guidelines (I don't know what this is yet).
* "author": you can feel free to include your name, alias, contact info. Use 
md format in the string literal.

```json
{
  "name": "my-bubu-package",
  "version": "0.3.12",
  "author": "Your Name <email@example.com> (https://example.com)"
}
```


### Creating a new package.json file

Simple add a package.json file using *CLI questionnaire* or creating a default
`package.json` file.


#### Running a CLI questionnaire

This is best for creating multiple initial `package.json` so that you can
customize them later.

1. Navigate to root dir
2. Run the `npm init` CLI command
3. Answer the questions in the command line questionnaire

To customize this default questionnair, you can by simply:

1. In the home dir, create a file called `.npm-init-js`
2. To add custom questions, using a text editor, add questions with the `prompt`
function

```js
module.export = prompt("What's your fav ice-cream?", "I like them all!");
```

3. To add custom fields, using a text editor, add desired fields as key-value
properties in the `module.export` object.

```js
module.export = {
    customField: 'My first custom field',
    otherField: 'my other field',
}
```

#### Creating a default package.json file

Simply navigate to the root dir and run: 

```terminal
npm init --yes
```

Where `--yes` | `-y`


#### Customizing the init command

The default values created for a default pacakge.json can be changed using the
following CLI commands:

```terminal
npm set init-author-email "example-user@example.com"
npm set init-author-name "example_user"
npm set init-license "MIT"
```



