import { useFonts } from "expo-font";
import { fonts } from "./src/styles/fonts";
import { ThemeProvider} from "styled-components";
import { theme } from "./src/styles/theme";
import App from "./src";

export default function Main() {
  const [fontsLoaded] = useFonts(fonts); 

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme = {theme}>
      <App/>
    </ThemeProvider>

  )
;




};