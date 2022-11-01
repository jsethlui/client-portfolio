
import React, { useEffect } from "react";
import { MantineProvider } from '@mantine/core';
import "./App.css";
import Main from "./Main";

const App: React.FC = () => {
    useEffect(() => {
        document.title = "Home | Harmony Chan"
    }, [])

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <div className="App">
                <Main />
            </div>
        </MantineProvider>
  );
};

export default App;