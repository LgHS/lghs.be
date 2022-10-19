export default function jwt({ token, account, profile }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
    if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
    }
    return token
}