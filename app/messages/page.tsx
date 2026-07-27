export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import DeleteButton from "./DeleteButton";

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">Messages</h1>

      {messages.length === 0 ? (
        <div className="rounded-xl border border-gray-800 bg-[#111] p-8 text-center text-gray-400">
          No messages yet.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full">
            <thead className="bg-[#111]">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Subject</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((m) => (
                <tr key={m.id} className="border-t border-gray-800">
                  <td className="p-4">{m.name}</td>
                  <td className="p-4">{m.email}</td>
                  <td className="p-4">{m.subject}</td>
                  <td className="p-4">{m.message}</td>
                  <td className="p-4">
                    {new Date(m.createdAt).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <DeleteButton id={m.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
