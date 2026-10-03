import {SignJWT,jwtVerify} from 'jose'; import bcrypt from 'bcryptjs';
const secret=()=>new TextEncoder().encode(process.env.SECRET_KEY||'development-only-change-me');
export async function hashPassword(v:string){return bcrypt.hash(v,12)}
export async function verifyPassword(v:string,h:string){return bcrypt.compare(v,h)}
export async function signUser(user:{id:string;email:string;role:string}){return new SignJWT(user).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime(`${process.env.JWT_EXPIRES_DAYS||30}d`).sign(secret())}
export async function readToken(token:string){const {payload}=await jwtVerify(token,secret());return payload as {id:string;email:string;role:string}}
