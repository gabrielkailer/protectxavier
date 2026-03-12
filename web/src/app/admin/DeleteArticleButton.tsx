"use client";

import { Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { deleteArticle } from "./actions";

export function DeleteArticleButton({ id }: { id: string }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Tem certeza que deseja apagar permanentemente este artigo?")) return;

        setIsDeleting(true);
        try {
            await deleteArticle(id);
        } catch (err: any) {
            alert("Erro de banco de dados: " + err.message);
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <button 
           onClick={handleDelete} 
           disabled={isDeleting}
           className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors border border-transparent hover:border-red-400/20 disabled:opacity-50" 
           title="Excluir Artigo"
        >
            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
        </button>
    )
}
