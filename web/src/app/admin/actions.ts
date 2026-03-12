"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

export async function deleteArticle(id: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    // Deleta o registro pelo Admin Bypass
    const { error } = await supabaseAdmin.from('articles').delete().eq('id', id);
    
    if (error) {
        throw new Error(error.message);
    }
    
    // Limpa o cache para todos verem a remoção instantânea
    revalidatePath('/admin');
    revalidatePath('/blog');
}
