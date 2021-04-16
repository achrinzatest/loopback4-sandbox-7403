import {ApplicationConfig, createBindingFromClass} from '@loopback/core';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {TestController} from './test.controller';
import {ComponentsSpecEnhancer} from './test.openapi-enhancer';

export {ApplicationConfig};

export class LoopbackApplication extends RestApplication {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);
    this.controller(TestController);
    this.add(createBindingFromClass(ComponentsSpecEnhancer));
  }

}
