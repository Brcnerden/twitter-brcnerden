import styled from "@emotion/styled";

const ProfileFoto = styled.img`
  vertical-align: middle;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media screen and (max-width: 992px) {
    margin-left: 50px;
    width: 60px;
    height: 60px;
  }
`;

const ProfileInformation = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div > span {
    display: block;
    margin-right: 20px;
  }
`;

const TextInformation = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export { ProfileFoto, ProfileInformation, TextInformation };
