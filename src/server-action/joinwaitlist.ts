'use server'

import { checkWaitlist, createWaitlist } from "@/lib/appwrite";
import { revalidatePath } from "next/cache";

export default async function joinWaitlist(_, formData) {
    const email = formData.get("email")

    if (!email) throw Error("email required")

    try {
        const checkEmail = await checkWaitlist(email)
        if (checkEmail.total > 0) {
            return { error: 'email alreadt exists', email: '' }
        }
        const response = await createWaitlist(email)
        revalidatePath('/')
        return { error: '', email: response.email };
    } catch (error) {
        return {
            error: "There was an error with this email",
            message: "Failed submission",
        };
    }
}