module.exports = {
  name: 'ngx-xis-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-xis-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
