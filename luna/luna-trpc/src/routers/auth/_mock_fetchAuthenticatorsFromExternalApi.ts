import { Luna } from "luna-sdk"

export const fetchAuthenticatorsFromExternalAPI = async (token: string | null, authenticators: string[]): Promise<Luna.Authenticator[]> => {
  // HTTP Call
  return authenticators.map((id) => ({
    id: id,
    provider: 'facebook',
    token: 'facebook-auth-token'
  }))
}
