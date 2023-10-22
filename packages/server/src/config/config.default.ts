import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1663495479148_225',
  koa: {
    port: 7201,
  },
  midwayLogger: {
    default: {
      maxFiles: '1d',
      datePattern: 'YYYY-MM-DD.log',
      format: info => {
        return `${info.timestamp} ${info.LEVEL} ${info.pid} ${info.labelText}${info.message}`;
      },
    },
    clients: {
      coreLogger: {
        fileLogName: 'core',
      },
      appLogger: {
        fileLogName: 'app',
      },
    },
  },

  upload: {
    // mode, 默认为file，可配置 stream
    mode: 'file',
    //  最大上传文件大小，默认为 10mb
    fileSize: '10mb',
  },
} as MidwayConfig;
