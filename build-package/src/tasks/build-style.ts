import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import { fileURLToPath } from 'node:url';
import { dest, src } from 'gulp';

const sass = gulpSass(dartSass);

export const buildThemeDefault = () => {
  return src(
    fileURLToPath(new URL('../../../packages/styles/*.scss', import.meta.url))
  )
    .pipe(sass.sync().on('error', sass.logError)) // Add error logging here
    .pipe(
      dest(fileURLToPath(new URL('../../../dist/styles', import.meta.url)))
    ); // Output without *.css
};

export function buildDarkCssVars() {
  return src(
    fileURLToPath(
      new URL('../../../packages/styles/theme-dark/index.scss', import.meta.url)
    )
  )
    .pipe(sass.sync().on('error', sass.logError)) // Add error logging here
    .pipe(
      dest(
        fileURLToPath(
          new URL('../../../dist/styles/theme-dark', import.meta.url)
        )
      )
    );
}
