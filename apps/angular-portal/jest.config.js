module.exports = {
  name: 'angular-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-portal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
