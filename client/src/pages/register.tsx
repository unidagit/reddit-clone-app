import React, { useState } from "react";
import Link from "next/link";
import InputGroup from "../components/InputGroup";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="w-10/12 mx-auto md:w-96">
        <h1 className="mb-2 text-lg font-medium">회원가입</h1>
        <form>
          <InputGroup
            placeholder="Email"
            value={email}
            setValue={setEmail}
            error={errors.email}
          />
          <InputGroup
            placeholder="Username"
            value={username}
            setValue={setUsername}
            error={errors.username}
          />
          <InputGroup
            placeholder="Password"
            value={password}
            setValue={setPassword}
            error={errors.password}
          />
          <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border-gray-400 rounded ">
            회원가입
          </button>
        </form>
        <small>
          이미 가입하셨나요?
          <Link href="/login">
            <a className="ml-1 text-blue-600">로그인</a>
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Register;
