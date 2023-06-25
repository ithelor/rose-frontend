import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
    min-height: 100vh;
    padding: 16px;
    display: grid;
    grid-template: max-content 1fr / max-content auto;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
    padding: 32px 64px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = styled.main`
    height: 100%;
    flex: 1;
`;
