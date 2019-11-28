import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import MyComponent from './MyComponent';

function App() {
    const theme={
        spacing: (n) => (n*8)
    }; // 빈 theme 오브젝트 생성
    return (
        <ThemeProvider theme={theme}>
        <MyComponent />
        </ThemeProvider>
    );
}

export default App;
