// src/jest-config/setup.ts
import 'jest-preset-angular';
import './globalMocks';

Object.defineProperty(global, 'Promise', { writable: false, value: global.Promise });
