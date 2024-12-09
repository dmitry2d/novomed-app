import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <WebView source={{ uri: "https://volcharo1.fvds.ru/novomed-app/" }} />
      <StatusBar style="auto" backgroundColor="transparent" translucent />
    </>
  );
}

