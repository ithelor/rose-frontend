import styled from '@emotion/react';
import { ThemeT } from 'presentation/context/Theme';

declare module '@emotion/react' {
    export interface Theme extends ThemeT {}
}

export default styled;
