import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;

  .overlayWrap {
    background-color: white;
    border-radius: 10px;
    width: 180px;
    ${props => props.theme.flexBox('column', 'center', 'flex-start')}

    .overlayImg {
      width: 180px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    .textContainer {
      ${props => props.theme.flexBox('row', 'space-between', 'flex-start')}
      width: 100%;
      padding: 3px;

      .btnContainer {
        width: 10%;
        padding: 0 5px;
        /* background-color: pink; */
        ${props => props.theme.flexBox('row', 'flex-end', 'flex-end')}

        .closeBtn {
          background-color: white;
          width: 1.4rem;
          height: 1.4rem;
          font-size: 1.4rem;
          border: none;
          border-radius: 10px;
        }
      }
      .accommInfoWrap {
        width: 90%;
        padding: 4px 4px 6px 8px;

        .accommName,
        .accommRegion {
          padding: 3px;
        }

        .accommName {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .accommRegion {
          font-size: 0.85rem;
        }
      }
    }
  }
  .hidden {
    display: none;
    overflow: hidden;
  }
  .overlayPrice {
    background-color: ${props => props.theme.primaryColor};
    padding: 8px;
    border-radius: 20px;
    color: white;
    text-shadow: 0.5px 0.5px 0.5px black;
  }
`;
