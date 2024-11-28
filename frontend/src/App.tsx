import "./App.css";
import CounterButtonFunction from "./components/CounterButtonFunction";
import CounterButtonClass from "./components/CounterButtonClass";
import { BackendPinger } from "./PingBackend";

export function App() {
  return (
    <>
      <h1>React</h1>
      <div>
        <CounterButtonFunction title="Эта хрень - функция" startCount={42} />
        <CounterButtonClass title="Эта хрень - класс" startCount={69} />
      </div>
      <BackendPinger />
    </>
  );
}

