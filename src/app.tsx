import { Route, Router } from "@solidjs/router";
import Basic from "./basic";

export default function App() {
  return (
    <Router root={(props) => props.children}>
      <Route path="/" component={Basic} />
    </Router>
  );
}
