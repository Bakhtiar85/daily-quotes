"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Quote } from "@/types";

export default function AdminDashboard() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check auth
        const auth = sessionStorage.getItem("adminAuth");
        if (!auth) {
            router.push("/admin");
            return;
        }

        fetchQuotes();
    }, [router]);

    const fetchQuotes = async () => {
        try {
            const response = await fetch("/api/quotes");
            const data = await response.json();
            setQuotes(data);
        } catch (error) {
            console.error("Error fetching quotes:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this quote?")) return;

        try {
            const response = await fetch(`/api/quotes?id=${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                fetchQuotes();
            }
        } catch (error) {
            console.error("Error deleting quote:", error);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("adminAuth");
        router.push("/admin");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => router.push("/admin/dashboard/create")}
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg"
                        >
                            + Create New Quote
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Quote</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Author</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {quotes.map((quote) => (
                                <tr key={quote.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900">{quote.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
                                        {quote.text}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{quote.author}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs uppercase">
                                            {quote.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => router.push(`/admin/dashboard/edit/${quote.id}`)}
                                                className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(quote.id)}
                                                className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}