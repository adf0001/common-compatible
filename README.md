# common-compatible

common compatible tool

## install

`npm install common-compatible`

## document

1. Any kind of compatible functions or objects or anything may be added to this package.
2. There is no summary package file, such as index.js, in this package.
3. Require each single item to your file, or build you own compatible set.

## convention

### namespace

A file of compatible item should be placed in a classification folder.

### method convention

If a method has a `this` object, it should be defined as:

`function( thisObject, arg1, arg2, ... )`

