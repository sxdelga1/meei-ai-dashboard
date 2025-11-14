import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  User: a
    .model({
      email: a.string().required(),
      fullname: a.string().required(),
      credits: a.float().default(100.0),
    })
    .authorization((allow) => [allow.owner()]),
    
  Transaction: a
    .model({
      userId: a.string().required(),
      type: a.enum(['credit', 'debit']),
      amount: a.float().required(),
      description: a.string().required(),
      serviceUsed: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
