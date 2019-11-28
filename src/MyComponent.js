import React from 'react';
import { useTheme } from '@material-ui/core/styles';

export default function MyComponent() {
    const theme = useTheme(); // 테마 오브젝트를 반환
    // 테마 오브젝트의 spacing 사용
    return <div>{`spacing ${theme.spacing(3)}`}</div>;
}