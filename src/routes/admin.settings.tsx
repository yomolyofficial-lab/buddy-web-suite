import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="font-display text-2xl font-bold">Settings</h1>
      <div className="gradient-border rounded-2xl p-6 space-y-4">
        <div className="grid gap-2">
          <Label>Store name</Label>
          <Input defaultValue="DigitalBuddy" className="bg-surface" />
        </div>
        <div className="grid gap-2">
          <Label>Support email</Label>
          <Input defaultValue="support@digitalbuddy.store" className="bg-surface" />
        </div>
        <div className="grid gap-2">
          <Label>Default currency</Label>
          <Input defaultValue="PKR" className="bg-surface" />
        </div>
        <Button className="bg-primary text-primary-foreground">Save changes</Button>
      </div>
    </div>
  );
}
