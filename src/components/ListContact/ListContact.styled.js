import styled from 'styled-components';

const List = styled.ol`
font-size: 18px;
text-align: start;
`;

const ListItem = styled.li`
padding: 2px 5px;
max-width: 50%;
margin-bottom: 5px;
&:last-child {
    margin-bottom: 0;
}
`;

export { List, ListItem};