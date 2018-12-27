import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";
import { Button } from "antd";

const BorderedButton = styled(Button)`
  font-weight: 600;
  color: ${oc.cyan[6]};
  border: 1px solid ${oc.cyan[6]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    background: ${oc.cyan[6]};
    color: white;
    ${shadow(1)}
  }

  &:active {
    /* 마우스 클릭시 아래로 미세하게 움직임 */
    transform: translateY(3px);
  }
`;

const RoundedBtn = styled(Button)`
  &.ant-btn {
    border-radius: 4px;
  }
`;

const BoardBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const LoginButton = styled.div`
  &.submit-btn {
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${oc.cyan[6]};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: 0.2s all;

    &:hover {
      background: ${oc.cyan[5]};
      ${shadow(0)}
    }

    &:active {
      background: ${oc.cyan[7]};
    }
  }
`;

const RightAlignedBtn = styled.div`
  & {
    margin-top: 0.2rem;
    text-align: right;
  }

  & a {
    color: ${oc.gray[6]};
    text-decoration: none;

    &:hover {
      color: ${oc.gray[7]};
    }
  }
`;

const SendBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const SocialLoginBtn = styled(BorderedButton)`
  &.ant-btn {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 90%;
    height: 3rem;
    font-size: 0.8rem;
  }
`;

const TodoBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

export {
  BoardBtn,
  LoginButton,
  RightAlignedBtn,
  SendBtn,
  SocialLoginBtn,
  TodoBtn
};
