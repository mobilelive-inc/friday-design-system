module.exports = {
  name: 'angular-sign-up',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-sign-up',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
