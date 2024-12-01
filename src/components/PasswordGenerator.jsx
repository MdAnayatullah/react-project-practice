import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordref = useRef(null);
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*(){}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPassword = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
    //passwordref.current?.setSelectionRange(0, 20); //upto how long range of password you want to select.
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, number, character, PasswordGenerator]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-yellow-600 bg-black "
      >
        <h1 className="text-green-300 text-center py-3 my-3">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}
          />

          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white
        px-3 py-0.5"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label>Length: {length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />

            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />

            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
