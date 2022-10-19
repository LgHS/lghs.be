import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
export const authOptions = {
    providers: [
        KeycloakProvider({
            clientId: "website",
            clientSecret: "63d48c0b-da72-4db0-bf59-ff6ce555cca3",
            issuer: "https://auth.lghs.be/auth/realms/LGHS",
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token and user id from a provider.
          session.accessToken = token.accessToken
          session.user.id = token.id
          
          return session
        }
      }
}
export default NextAuth(authOptions)