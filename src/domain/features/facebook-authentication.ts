import { AccessToken } from '@/domain/models'
import { AuthenticationError } from '@/domain/errors'

export interface FacebookAuthentication {
  // Command Pattern
  perform: (params: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

// Evitar conflito de nomenclatura (Params) em futuras features
export namespace FacebookAuthentication {
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}
