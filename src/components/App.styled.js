import styled, { keyframes } from 'styled-components';

export const Box = styled.div`
   display: flex;
   flex-direction: column;
`;
export const Gallery = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-gap: 16px;
   padding-bottom: 24px;
`;
export const Searchbar = styled.header`
   top: 0;
   left: 0;
   position: sticky;
   z-index: 1100;
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 64px;
   padding-right: 24px;
   padding-left: 24px;
   padding-top: 12px;
   padding-bottom: 12px;
   color: #fff;
   background-color: #3f51b5;
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const ImageGallery = styled.ul`
   display: grid;
   max-width: calc(100vw - 48px);
   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
   grid-gap: 16px;
   margin-top: 0;
   margin-bottom: 0;
   padding: 0;
   list-style: none;
   margin-left: auto;
   margin-right: auto;
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
