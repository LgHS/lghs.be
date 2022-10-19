export default function signIn({ user, account, profile, email, credentials }) {
    const isAllowedToSignIn = true
    if (isAllowedToSignIn) {
        return true
    } else {
      // Return false to display a default error message
        return false
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    }
}