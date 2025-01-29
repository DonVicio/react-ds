import './App.css';
import Subtitle from "./ui-kit/atoms/text/subtitle";

function App() {
  return (
    <>
      <h1>Hello Pisha</h1>
      <Subtitle>Subtítulo por defecto</Subtitle>
      <Subtitle size="xs">Subtítulo pequeño</Subtitle>
      <Subtitle size="md">Subtítulo mediano</Subtitle>
      <Subtitle size="lg">Subtítulo grande</Subtitle>
    </>
  );
}

export default App;
