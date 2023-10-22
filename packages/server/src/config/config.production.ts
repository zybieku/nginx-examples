import { MidwayConfig } from '@midwayjs/core';
import path = require('path');

export default {
  midwayLogger: {
    default: {
      maxFiles: '5d',
      dir: path.join(process.cwd(), 'logs'),
    },
    clients: {
      coreLogger: {
        level: 'warn',
        consoleLevel: 'warn',
      },
      appLogger: {
        level: 'warn',
        consoleLevel: 'warn',
      },
    },
  },

  customConfig: {
    fileBaseUrl: '',
  },
} as MidwayConfig;
