import "./styles.css";
import { useFetch } from "@react-use-hooks/use-fetch";

export default function App() {
  const { fetch, data, error, fetching, status, request, response } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1"
  });
  return (
    <div className="App">
      <h1>React-use-hooks : useFetch</h1>
      <button onClick={() => fetch()}>Fetch Data</button>
      <p>Fetching: {fetching + ""}</p>
      <p>Status: {status}</p>
      <p>Request Method: {request?.method}</p>
      <p>Request URL: {request?.url}</p>
      <p>Response code: {response?.status}</p>
      <p>Response Text: {response?.statusText}</p>
      <p>Data: {data && JSON.stringify(data)}</p>
      <p>Error: {error && error.message}</p>
    </div>
  );
}
