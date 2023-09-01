import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <h1>ddsds</h1>
      <Stack direction="horizontal" gap={2}>
        <Button variant="primary">Button as link</Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
    </>
  );
}

export default App;
