
import { prisma } from "@/lib/prisma";
import AdminTable from "./AdminTable";

export default async function AdminPage() {
	const messages = await prisma.contactMessage.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const todayMessages = messages.filter(
		(m) => new Date(m.createdAt) >= today
	);

	const uniqueEmails = new Set(messages.map((m) => m.email));

	return (
		<main className="min-h-screen bg-black px-8 py-10 text-white">
			<h1 className="mb-8 text-4xl font-bold">
				NovaFlow Dashboard
			</h1>

			<div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

				<div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
					<p className="text-gray-400">Total Messages</p>

					<h2 className="mt-3 text-5xl font-bold text-blue-500">
						{messages.length}
					</h2>
				</div>

				<div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
					<p className="text-gray-400">Today</p>

					<h2 className="mt-3 text-5xl font-bold text-green-400">
						{todayMessages.length}
					</h2>
				</div>

				<div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
					<p className="text-gray-400">Unique Emails</p>

					<h2 className="mt-3 text-5xl font-bold text-purple-400">
						{uniqueEmails.size}
					</h2>
				</div>

				<div className="rounded-2xl border border-gray-800 bg-[#111] p-6">
					<p className="text-gray-400">Latest Message</p>

					<h2 className="mt-3 text-xl font-semibold">
						{messages.length ? messages[0].name : "No messages"}
					</h2>
				</div>

			</div>

			<AdminTable messages={messages} />
		</main>
	);
}

