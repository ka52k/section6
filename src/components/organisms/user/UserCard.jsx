import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img height={160} width={160} src="https://source.unsplash.com/OzAeZPNsLXk" alt="プロフィール" />
      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>kk@kk.com</dd>
        <dt>TEL</dt>
        <dd>000-9999-12345</dd>
        <dt>会社名</dt>
        <dd>KK株式会社</dd>
        <dt>WEB</dt>
        <dd>ka52k@gmail.com</dd>
      </dl>
    </div>
  );
};