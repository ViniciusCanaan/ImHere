import { StatusBar } from "react-native";
import Home from "./src/screens/Home"; //Não preciso passar Home/index porque por padrão sempre procura o index
export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
      <Home />
    </>
  );
}