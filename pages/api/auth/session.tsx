export default function session({ session, token, user }) {
    // Send properties to the client, like an access_token and user id from a provider.
    session.accessToken = token.accessToken
    session.user.id = token.id
    
    return session
}