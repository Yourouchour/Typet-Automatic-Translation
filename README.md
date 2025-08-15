# Typst-Automatic-Translation (unofficial)

Translate English on the typst.app into other languages.

## Usage

Currently, the only way to use it is to manually download the source file from GitHub. Please go to https://raw.githubusercontent.com/yourouchour/Typst-Automatic-Translation/main/typst-automatic-translation.user.js for the script.

For information on how to work with the script (install, use, update), see https://www.tampermonkey.net.

_0.1.0_: The first version was released, covering most of the buttons and included support for Chinese, Russian, German, French, Spanish, Japanese (currently machine translation).

_2025-8-14_: Now the first time you use the program, the original English text will be displayed directly. If you see the `Language` button appear on the header, it means that you have successfully loaded it

## Issues to be addressed (help welcome):

- increase the number of entries;
- ~~Added support for switching other languages;~~
- Stop monitoring while editing text until you finish editing;
- Lower uptime and storage.

## Development

For a better developer experience, [JSDoc] (paired with [`tsserver`]) is used to provide better autocompletion/hover docs support during code development. When introducing new functions/variables or changing existing ones, please use JSDoc comments.

[JSDoc]: https://jsdoc.app
[`tsserver`]: https://github.com/microsoft/TypeScript/wiki/Standalone-Server-(tsserver)

### Prerequisites

- [`prettier`](https://prettier.io) (for file formatting)

Add pre-commit Git hook after cloning this repository:

```sh
cat << EOF > .git/hooks/pre-commit
#!/bin/sh
if ! prettier -c .; then
  prettier -w .
  echo "Files were re-formatted. Please commit these changes." >&2
  false
fi
EOF
chmod +x .git/hooks/pre-commit
```

### Formatting

Formatting is done with `prettier`:

```sh
prettier -w .
```
