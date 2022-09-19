import React, { FormEvent, useState } from "react";
import InputGroup from "../components/InputGroup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  let router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "/auth/login",
        { password, username },
        { withCredentials: true }
      );
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data || {}); //만약에 데이터가 없으면 빈객체를 넣어줌
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="w-10/12 mx-auto md:w-96">
        <h1 className="mb-2 text-lg font-medium">로그인</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup
            type="text"
            placeholder="Username"
            value={username}
            setValue={setUsername}
            error={errors.username}
          />
          <InputGroup
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
            error={errors.password}
          />
          <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border-gray-400 rounded ">
            로그인
          </button>
        </form>
        <small>
          아직 아이디가 없나요?
          <Link href="/register">
            <a className="ml-1 text-blue-600">회원가입</a>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
