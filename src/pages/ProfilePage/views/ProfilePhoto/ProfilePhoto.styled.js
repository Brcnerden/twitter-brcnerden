import styled from "@emotion/styled";
import { COLORS } from "../../../../theme/colors";

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
  font-size: 14px;
  font-weight: lighter;

  > img {
    max-width: 100%;
    object-fit: cover;
    z-index: 1;
    border: 1px solid gray;
    border-radius: 50%;
    margin-top: -50px;
  }
  > div > span {
    color: ${COLORS.blue.$600};
    display: inline;
  }
`;

const Button = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: space-between;
  > button {
    width: 90px;
    height: 30px;
    margin: 30px 10px;
    border-radius: 50px;
    border: 1px solid;
    background-color: ${COLORS.white.$600};
  }
`;
const Description = styled.div`
  width: 1000px;
`;

const Follower = styled.div`
  margin-top: 30px;
  display: flex;

  > span {
    margin-right: 10px;
    font-weight: bold;
  }
  > div {
    margin-right: 10px;
    font-weight: lighter;
  }
`;

const Tweets = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 19px;

  > span:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export { Banner, ProfileFoto, Button, Description, Follower, Tweets };
