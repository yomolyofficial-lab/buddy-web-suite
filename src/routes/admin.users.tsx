import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/users")({
  component: UsersAdmin,
});

const users = Array.from({ length: 8 }).map((_, i) => ({
  name: ["Ali Khan", "Sara A.", "Hamza R.", "Zara A.", "Omar S.", "Noor H.", "Asad Q.", "Imran F."][i],
  email: `user${i + 1}@digitalbuddy.store`,
  orders: 3 + i,
  joined: `2025-0${(i % 9) + 1}-12`,
}));

function UsersAdmin() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Customers</h1>
      <div className="gradient-border rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr><th className="px-4 py-3">Name</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Orders</th><th className="px-4 py-3">Joined</th></tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {users.map((u) => (
              <tr key={u.email} className="hover:bg-secondary/30">
                <td className="px-4 py-3 font-medium">{u.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                <td className="px-4 py-3">{u.orders}</td>
                <td className="px-4 py-3">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
