import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';
import 'react-native-get-random-values';


export default function App() {
  return (
    <>
      <Home />
      <StatusBar />
    </>
  );
}

