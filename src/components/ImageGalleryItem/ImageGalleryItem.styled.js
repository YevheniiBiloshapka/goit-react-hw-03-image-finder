import styled, { keyframes } from 'styled-components';
export const Item = styled.li`
   border-radius: 2px;
   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const ItemImage = styled.img`
   width: 100%;
   height: 260px;
   object-fit: cover;
   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
   &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
   }
`;

const ldsDualRing = keyframes`
 0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
	
`;

export const Loader = styled.div`
   display: inline-block;
   position: absolute;
   top: 30%;
   left: 50%;
   transform: translate(-50%, -50%);

   margin: 40px auto;
   width: 40px;
   height: 40px;
   &::after {
      content: ' ';

      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 6px solid #3f51b5;
      border-color: #3f51b5 transparent #3f51b5 transparent;
      animation: ${ldsDualRing} 1.2s linear infinite;
   }
`;
