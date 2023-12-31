export default function getTokenObjectPayload(token) {
    const base64TokenPayloadBase64 = token.split('.')[1]
    const decodedTokenPayload = atob(base64TokenPayloadBase64)
    const tokenObjectPayload = JSON.parse(decodedTokenPayload)

    return tokenObjectPayload
}
