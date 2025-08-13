# Typst-Automatic-Translation (unofficial)

Translate English on the typst.app into other languages.

## Usage

Since the program is currently in an early version, the only way to use it at this time is to manually download the source file from GitHub. This means you need to check for updates manually.

## Issues to be addressed (help welcome):

- increase the number of entries;
- Added support for switching other languages;
- Stop monitoring while editing text until you finish editing;
- Lower uptime and storage.

## Development

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
