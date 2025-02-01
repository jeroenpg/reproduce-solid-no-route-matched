import { Route, Router } from "@solidjs/router";

export default function App() {
  return (
    <Router root={(props) => props.children}>
      <Route path="/" component={() => <>Hi</>} />
    </Router>
  );
}
