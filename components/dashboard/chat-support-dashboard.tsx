import { Bell, Clock3, Filter, LayoutGrid, MessageSquare, Search, Send, Star, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const conversations = [
  {
    id: "TK-2310",
    customer: "Mia Johnson",
    topic: "Unable to upgrade to Pro",
    status: "Urgent",
    waitTime: "2 min",
    sentiment: "Frustrated",
  },
  {
    id: "TK-2308",
    customer: "Sandro Diaz",
    topic: "Refund question",
    status: "Open",
    waitTime: "7 min",
    sentiment: "Neutral",
  },
  {
    id: "TK-2302",
    customer: "Kelly Wong",
    topic: "API token not working",
    status: "Priority",
    waitTime: "12 min",
    sentiment: "Concerned",
  },
  {
    id: "TK-2287",
    customer: "Noah Smith",
    topic: "Billing invoice mismatch",
    status: "Open",
    waitTime: "14 min",
    sentiment: "Neutral",
  },
];

const team = [
  { name: "Priya", active: true, chats: 12 },
  { name: "Aiden", active: true, chats: 8 },
  { name: "Liam", active: false, chats: 0 },
];

export function ChatSupportDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-5 p-4 md:grid-cols-[280px_1fr] md:p-8">
        <aside className="rounded-2xl border bg-card/80 p-5 shadow-sm backdrop-blur">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-primary/15 p-2 text-primary">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Support</p>
              <h1 className="text-lg font-semibold">PulseDesk</h1>
            </div>
          </div>

          <nav className="space-y-2 text-sm">
            {[
              [LayoutGrid, "Dashboard", true],
              [MessageSquare, "Conversations", false],
              [Users, "Customers", false],
              [Clock3, "SLA Monitor", false],
              [Star, "Satisfaction", false],
            ].map(([Icon, label, isActive]) => (
              <button
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${
                  isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
                key={label as string}
                type="button"
              >
                <Icon className="h-4 w-4" />
                <span>{label as string}</span>
              </button>
            ))}
          </nav>

          <Card className="mt-8 border-primary/15 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Team Online</CardTitle>
              <CardDescription>Assign chats intelligently</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {team.map((agent) => (
                <div className="flex items-center justify-between text-sm" key={agent.name}>
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${agent.active ? "bg-emerald-500" : "bg-muted-foreground"}`} />
                    <span>{agent.name}</span>
                  </div>
                  <span className="text-muted-foreground">{agent.chats} chats</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>

        <section className="space-y-5">
          <header className="rounded-2xl border bg-card/80 p-5 shadow-sm backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Tuesday, March 31, 2026</p>
                <h2 className="text-2xl font-semibold">Customer Chat Operations</h2>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button>
                  <Send className="h-4 w-4" />
                  Broadcast Update
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex min-w-[230px] flex-1 items-center gap-2 rounded-xl border bg-background px-3 py-2 text-sm text-muted-foreground">
                <Search className="h-4 w-4" />
                Search by customer, topic, or ticket
              </div>
              <Button variant="secondary">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </header>

          <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Active Conversations</CardTitle>
                <CardDescription>Sorted by urgency and SLA risk</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {conversations.map((chat) => (
                  <article className="rounded-xl border bg-background/80 p-4" key={chat.id}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{chat.customer}</p>
                        <p className="text-sm text-muted-foreground">{chat.topic}</p>
                        <p className="mt-1 text-xs text-muted-foreground">Ticket {chat.id}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={chat.status === "Urgent" ? "default" : "secondary"}>{chat.status}</Badge>
                        <Badge variant="outline">{chat.waitTime}</Badge>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Mood: {chat.sentiment}</span>
                      <Button size="sm">Open Chat</Button>
                    </div>
                  </article>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-5">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Today&apos;s Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  {["Resolved chats", "Avg. response time", "CSAT score", "SLA breaches"].map((metric, idx) => (
                    <div className="flex items-center justify-between" key={metric}>
                      <span className="text-muted-foreground">{metric}</span>
                      <span className="font-medium">{["184", "1m 54s", "96%", "2"][idx]}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>AI Suggestions</CardTitle>
                  <CardDescription>Copilot generated quick replies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="rounded-xl bg-secondary/60 p-3">Offer one-time prorated credit and share upgrade steps.</div>
                  <div className="rounded-xl bg-secondary/60 p-3">Request invoice ID and explain tax adjustment timeline.</div>
                  <div className="rounded-xl bg-secondary/60 p-3">Validate API scope and regenerate a token with write access.</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
