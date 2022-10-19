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
    debug: true
}
export default NextAuth(authOptions)