module.exports = {
  name: 'ngx-ml-friday',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-ml-friday',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
