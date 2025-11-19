"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateQuotePage() {
    const [formData, setFormData] = useState({
        text: "",
        author: "",
        category: "",
        description: "",
        story: "",
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const auth = sessionStorage.getItem("adminAuth");
        if (!auth) {
            router.push("/admin");
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/quotes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push("/admin/dashboard");
            } else {
                alert("Failed to create quote");
            }
        } catch (error) {
            console.error("Error creating quote:", error);
            alert("Error creating quote");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <button
                        onClick={() => router.push("/admin/dashboard")}
                        className="text-indigo-600 hover:text-indigo-700 font-semibold mb-4"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-4xl font-bold text-gray-900">Create New Quote</h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Quote Text *
                        </label>
                        <textarea
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            rows={3}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Author *
                        </label>
                        <input
                            type="text"
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Category *
                        </label>
                        <input
                            type="text"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            placeholder="e.g., motivation, innovation, life"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Description *
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            rows={2}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Story *
                        </label>
                        <textarea
                            value={formData.story}
                            onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                            rows={12}
                            placeholder="Write the detailed story (use double line breaks for paragraphs)"
                            required
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-400"
                        >
                            {loading ? "Creating..." : "Create Quote"}
                        </button>
                        <button
                            type="button"
                            onClick={() => router.push("/admin/dashboard")}
                            className="px-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}