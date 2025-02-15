import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <WebView source={{ uri: "https://novomed-novoross.ru/m/" }} />
      <StatusBar style="auto" backgroundColor="transparent" translucent />
    </>
  );
}

