import { debug } from 'debug'

const log = debug('bit-middleware')

export default async (ctx) => {
  const { req, store, } = ctx
  if (process.server) {
    const userAgent = req.headers['user-agent']
  }
  il8n(ctx)

}
function il8n({
  isHMR, app, store, route, params,query, error, redirect
}) {
  if (isHMR) { // ignore if called from hot module replacement
    return;
  } 
}


