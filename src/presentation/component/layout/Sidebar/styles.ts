import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 100%;
    padding: 32px;
    grid-row: span 2;
    border-radius: 24px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray900};
`;

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const List = styled.ul`
    display: grid;
    row-gap: 32px;
`;

export const Item = styled.li``;
