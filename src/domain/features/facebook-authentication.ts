import { AccessToken } from '@/domain/models'
import { AuthenticationError } from '@/domain/errors'

export interface FacebookAuthentication {
  perform: (params: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

// Evitar conflito de nomenclatura (Params) em futuras features
namespace FacebookAuthentication {
  // Command Pattern
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}
