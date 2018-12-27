import React from "react";
import {
  LLayout,
  RightAlignedBtn,
  ShadowedBox,
  SLabel,
  SInfoInputForm,
  LoginButton
} from "../../styledComponents";
import { HomeInfo } from "..";
import { Link } from "react-router-dom";

const Register = ({
  email,
  password,
  username,
  passwordConfirm,
  onKeyPress,
  onChange,
  onSubmit
}) => {
  // 적절한 사이즈일 때 true, 아니면 false
  const properSize = true;

  return (
    <LLayout>
      {properSize ? <HomeInfo /> : ""}
      <ShadowedBox>
        <div className="logo-wrapper">
          <Link to="/auth/register">Bail</Link>
        </div>
        <div className="content-wrapper">
          <div className="title">회원가입</div>
          <SInfoInputForm className="login-form">
            <SLabel>이메일</SLabel>
            <input
              name="email"
              placeholder="이메일"
              value={email}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <SLabel>닉네임</SLabel>
            <input
              name="username"
              placeholder="닉네임"
              value={username}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <SLabel>비밀번호</SLabel>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <SLabel>비밀번호 확인</SLabel>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <LoginButton className="submit-btn" onClick={onSubmit}>
              회원가입
            </LoginButton>
            <RightAlignedBtn>
              <Link to="/">로그인</Link>
            </RightAlignedBtn>
          </SInfoInputForm>
        </div>
      </ShadowedBox>
    </LLayout>
  );
};

export default Register;
