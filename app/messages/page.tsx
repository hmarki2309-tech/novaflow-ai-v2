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

      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full">
          <thead className="bg-[#111]">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Message</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((m) => (
              <tr
                key={m.id}
                className="border-t border-gray-800"
              >
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
    </main>
  );
}
