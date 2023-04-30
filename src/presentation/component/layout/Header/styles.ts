import styled from '@emotion/styled';
import BaseText from 'presentation/component/common/typography/Text';

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    display: grid;
    grid-auto-flow: column;
    column-gap: 80px;
    align-items: center;
`;

export const Item = styled.li`
    display: grid;
    grid-auto-flow: column;
    column-gap: 16px;
    align-items: center;
`;

export const Text = styled(BaseText)`
    text-transform: uppercase;

    &:hover {
        color: ${({ theme }) => theme.colors.gray900};
    }
`;
