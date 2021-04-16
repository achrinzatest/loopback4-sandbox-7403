import {BindingScope, injectable} from '@loopback/context';
import {ValueOrPromise} from '@loopback/core';
import {asSpecEnhancer} from '@loopback/openapi-v3';
import {ComponentsObject, mergeOpenAPISpec, OASEnhancer, OpenApiSpec} from '@loopback/rest';

@injectable(asSpecEnhancer, { scope: BindingScope.SINGLETON })
export class ComponentsSpecEnhancer implements OASEnhancer {
  name = 'components';

  modifySpec(spec: OpenApiSpec): ValueOrPromise<OpenApiSpec> {
    const components: ComponentsObject = {
      schemas: {
        TupleArray: {
          title: 'TupleArray',
          type: 'array',
          items: {
            type: 'array',
            items: [{ type: 'number' }, { type: 'number' }],
            additionalItems: false,
          },
          example: [[4, 0.2]],
        },
      },
    };
    return mergeOpenAPISpec(spec, { components });
  }
}
