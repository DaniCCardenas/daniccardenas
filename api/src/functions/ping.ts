import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';

export async function ping(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log('Ping function processed a request.');

  return {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'ok',
      message: 'daniccardenas API is running',
      timestamp: new Date().toISOString(),
    }),
  };
}

app.http('ping', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'ping',
  handler: ping,
});
