export default function messagePrint(target: Function) {
  Object.defineProperty(target.prototype, "server", {
    value: () => "Node server is running",
  });
}
