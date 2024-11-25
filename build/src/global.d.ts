declare module 'gulp-clean' {
  import { Transform } from 'stream';
  function clean(options?: { force?: boolean }): Transform;
  export = clean;
}
