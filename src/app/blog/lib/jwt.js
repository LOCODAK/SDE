import jwt from 'jsonwebtoken'

// signing jwt
export function signJwtToken(payload, options = {}) {
    const secret = process.env.JWT_SECRET_BLOG;
    const token = jwt.sign(payload, secret, options);
    return token;
}


// verifying jwt
export function verifyJwtToken(token) {
    try {
        const secret = process.env.JWT_SECRET_BLOG;
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (error) {
        console.error(error);
        return null;
    }
}