import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
    min-height: 100vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
    height: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: max-content auto;
`;
