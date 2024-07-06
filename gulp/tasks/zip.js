import { deleteAsync } from 'del';
import zipPlugin from 'gulp-zip';
import gulp from 'gulp';
import path from 'path';

const projectFolderName = path.basename(process.cwd());

const app = {
  path: {
    rootFolder: 'dist'
  }
};

export const zip = () => {
  const zipFileName = `${projectFolderName}.zip`;

  console.log(`Deleting existing archive: ./${zipFileName}`);
  return deleteAsync(`./${zipFileName}`)
    .then(() => {
      console.log(`Starting to zip files from: ${app.path.rootFolder}/**/*.*`);
      return gulp.src(`${app.path.rootFolder}/**/*.*`, {})
        .pipe(zipPlugin(zipFileName))
        .pipe(gulp.dest('./'))
        .on('end', () => console.log('ZIP archive created successfully'));
    })
    .catch(err => console.error('Error creating ZIP archive:', err));
};

gulp.task('zip', zip);
