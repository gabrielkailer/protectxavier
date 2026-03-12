"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function deleteArticle(id: string) {
    // Deleta o registro pelo Admin Bypass
    const { error } = await supabaseAdmin.from('articles').delete().eq('id', id);
    
    if (error) {
        throw new Error(error.message);
    }
    
    // Limpa o cache para todos verem a remoção instantânea
    revalidatePath('/admin');
    revalidatePath('/blog');
}
