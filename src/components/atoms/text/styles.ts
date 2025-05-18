import styled from "styled-components";

interface SpanProps {
    'font-family': string,
    'font-weight': number,
    'font-size': number, 
    'font-color': string,
}

export const Span = styled.span<SpanProps>`
    font-family: ${(props) => props["font-family"]};
    font-weight: ${(props) => props["font-weight"]};
    font-size: ${(props) => `${props["font-size"]}px`};
    color: ${(props) => props["font-color"]};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`