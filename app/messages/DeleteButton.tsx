"use client";

export default function DeleteButton({
  id,
}: {
  id: string;
}) {
  async function remove() {
    if (!confirm("Delete message?")) return;

    await fetch(`/api/contact/${id}`, {
      method: "DELETE",
    });

    location.reload();
  }

  return (
    <button
      onClick={remove}
      className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-500"
    >
      Delete
    </button>
  );
}
