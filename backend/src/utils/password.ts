import * as bcrypt from "bcrypt"
export async function generatePasswordHash(password: string){
return await bcrypt.hash(password,10)
}

export async function verifyPassword(password: string, passwordHash: string){
    return await bcrypt.compare(password,passwordHash)
    }