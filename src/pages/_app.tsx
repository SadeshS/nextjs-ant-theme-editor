import React, { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

function App ({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(undefined);
  const [clientId, setClientId] = useState('1');

  useEffect(() => {
    fetch(`/api/loadTheme?clientId=${clientId}`)
      .then((res) => res.json())
      .then((data) => {
        setTheme(data.theme);
      });
  }, [clientId]);
  
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} setClientId={setClientId}/>
    </ConfigProvider>
  )
}

export default App;
