import { tickets } from "./tickets";

export default function App() {
  const selectedPriority = "High";
  const visibleTickets = tickets.filter(
    (ticket) => selectedPriority === "All" || ticket.status === selectedPriority
  );

  return (
    <main>
      <h1>Support Dashboard</h1>
      <p>{visibleTickets.length} tickets shown</p>
    </main>
  );
}
