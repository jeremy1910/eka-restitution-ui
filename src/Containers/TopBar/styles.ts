import styled from 'styled-components';

const LogoWrapper = styled.div`
    img {
        height: 75px;
        width: auto;
    }
        margin-right: 10px;
`

const TopBarWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

const LogoTitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`

export { LogoWrapper, TopBarWrapper, LogoTitleWrapper };