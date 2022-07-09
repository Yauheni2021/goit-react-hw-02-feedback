import styled from "styled-components";

export const Button = styled.button`
padding: ${p => `${p.theme.space[1]}px`} 0;
margin-rigth: ${p => `${p.theme.space[3]}px`} 0;
:last-child {
    margin-right: 0;
}

text-aligin: center;
font-size: ${p => p.theme.fontSizes.m};

`
