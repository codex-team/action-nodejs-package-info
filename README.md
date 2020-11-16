# Get node package info 

Action for getting information from package.json file

## Inputs

### `path`

Path to package.json file. `./` by default.

## Outputs

### `name`

Package name

### `version`

Package version

### `npmjs-link`

Link to npmjs.com package page

## Example usage

```
- name: Get package info
  id: package
  uses: codex-team/action-nodejs-package-info@v1

- name: Get the output
  run: |
    echo "name: ${{ steps.package.outputs.name }}"
    echo "version: ${{ steps.package.outputs.version }}"
    echo "npmjs-link: ${{ steps.package.outputs.npmjs-link }}"
```

You will get:

```
name: @editorjs/editorjs
version: 2.19.0
npmjs-link: https://www.npmjs.com/package/@editorjs/editorjs
```
