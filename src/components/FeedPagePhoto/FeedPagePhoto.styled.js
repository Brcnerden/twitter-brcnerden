import styled from "@emotion/styled";

const Banner = styled.div`
  max-width: 910px;
  width: 100%;
  > img {
    max-width: 100%;
    object-fit: cover;
  }
`;

const ProfileFoto = styled.div`
  max-width: 150px;
  width: 100%;
  height: 150px;
  > img {
    max-width: 100%;
    object-fit: cover;
    margin-top: -50px;
  }
`;

export { Banner, ProfileFoto };
