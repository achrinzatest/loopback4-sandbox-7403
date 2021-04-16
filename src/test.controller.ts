import {
  get,
  getModelSchemaRef,
  requestBody
} from '@loopback/rest';
import {TestModel} from './test.model';

export class TestController {
  @get('/test')
  ping(
    @requestBody({
      required: true,
      content: {
        'application/json': {
          schema: {
            allOf: [
              getModelSchemaRef(TestModel),
              {
                type: 'object',
                properties: {
                  contribution: {
                    $ref: '#/components/schemas/TupleArray',
                  },
                },
                required: ['contribution'],
              },
            ],
          },
        },
      }
    })
    myRequestBody: object,
  ) { }

}
