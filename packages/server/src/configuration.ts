import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as info from '@midwayjs/info';
import * as validate from '@midwayjs/validate';
import * as upload from '@midwayjs/upload';
import { join } from 'path';
import { DefaultErrorFilter } from './filter/default.filter';
//import { ReportMiddleware } from './middleware/report.middleware';
import { JwtMiddleware } from './middleware/jwt';

@Configuration({
  imports: [
    koa,
    validate,
    upload,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([JwtMiddleware]);
    // add filter
    this.app.useFilter([DefaultErrorFilter]);
  }
}
