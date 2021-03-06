// Copyright 2018 the Deno authors. All rights reserved. MIT license.
// Public deno module.
/// <amd-module name="deno"/>
export {
  env,
  exit,
  makeTempDirSync,
  renameSync,
} from "./os";
export { mkdirSync, mkdir } from "./mkdir";
export { readFileSync, readFile } from "./read_file";
export { FileInfo, statSync, lstatSync, stat, lstat } from "./stat";
export { writeFileSync, writeFile } from "./write_file";
export { ErrorKind, DenoError } from "./errors";
export { libdeno } from "./libdeno";
export const argv: string[] = [];
