
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Message = {
	id: string;
	name: string;
	email: string;
	subject: string | null;
	message: string;
	createdAt: Date;
};

export default function AdminTable({
	messages,
}: {
	messages: Message[];
}) {
	const [selected, setSelected] = useState<Message | null>(null);

	const router = useRouter();

	async function deleteMessage(id: string) {
		const ok = confirm("Delete this message?");

		if (!ok) return;

		const res = await fetch(`/api/contact/${id}`, {
			method: "DELETE",
		});

		if (res.ok) {
			router.refresh();
		} else {
			alert("Failed to delete message.");
		}
	}

	return (
		<>
			<div className="overflow-x-auto rounded-2xl border border-gray-800">
				<table className="w-full">
					<thead className="bg-[#111]">
						<tr>
							<th className="p-4 text-left">Name</th>
							<th className="p-4 text-left">Email</th>
							<th className="p-4 text-left">Subject</th>
							<th className="p-4 text-left">Date</th>
							<th className="p-4 text-center">Actions</th>
						</tr>
					</thead>

					<tbody>
						{messages.map((message) => (
							<tr
								key={message.id}
								className="border-t border-gray-800 hover:bg-[#111]"
							>
								<td className="p-4">{message.name}</td>

								<td className="p-4">{message.email}</td>

								<td className="p-4">{message.subject ?? "-"}</td>

								<td className="p-4">
									{new Date(message.createdAt).toLocaleDateString()}
								</td>

								<td className="p-4">
									<div className="flex justify-center gap-2">
										<button
											onClick={() => setSelected(message)}
											className="rounded-lg bg-blue-600 px-4 py-2 transition hover:bg-blue-500"
										>
											View
										</button>

										<button
											onClick={() => deleteMessage(message.id)}
											className="rounded-lg bg-red-600 px-4 py-2 transition hover:bg-red-500"
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

			{selected && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
					<div className="w-full max-w-xl rounded-2xl bg-[#111] p-8">
						<h2 className="mb-6 text-3xl font-bold">
							Contact Message
						</h2>

						<p>
							<b>Name:</b> {selected.name}
						</p>

						<p>
							<b>Email:</b> {selected.email}
						</p>

						<p>
							<b>Subject:</b> {selected.subject ?? "-"}
						</p>

						<div className="mt-6 rounded-xl bg-black p-5 whitespace-pre-wrap">
							{selected.message}
						</div>

						<button
							onClick={() => setSelected(null)}
							className="mt-8 rounded-xl bg-blue-600 px-6 py-3 transition hover:bg-blue-500"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
}
