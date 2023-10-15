/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <img
        className="absolute z-0 left-0 top-0 w-full h-full"
        src="/img/bg.png"
        alt="bg"
      />

      <div className="flex flex-col relative z-10 h-full">
        <div className="flex justify-between items-center px-5 pt-5">
          <img className="" src="/img/logo-fire.svg" alt="bg" />

          <div className="flex items-center space-x-4">
            <Link href="https://discord.gg/cr3pYvTWa6" target="_blank">
              <img
                className="hover:opacity-50 transition-all"
                src="/img/icon-discord.svg"
                alt="bg"
              />
            </Link>

            <Link href="https://twitter.com/_firethree" target="_blank">
              <img
                className="hover:opacity-50 transition-all"
                src="/img/icon-x.svg"
                alt="bg"
              />
            </Link>

            <Link href="https://docs.firethree.xyz" target="_blank">
              <img
                className="hover:opacity-50 transition-all"
                src="/img/icon-docs.svg"
                alt="bg"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col m-auto h-full">
          <span className="text-7xl px-2 md:px-0 text-center font-bold text-[#DCDBDB]">
            Create a Solana{" "}
            <span
              style={{
                background:
                  "linear-gradient(215deg, #F2BE47 34.37%, #EA7938 49.63%, #E13D2F 62.38%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              dApp
            </span>
          </span>
          <span className="text-[#CCCBCB] text-lg md:w-7/12 text-center mt-4 px-4 md:px-0">
            with collection, storage, auth and analytics using this protocol!
            storage the data with{" "}
            <Link
              className="underline hover:text-fire-orange text-fire-yellow transition-all"
              href="https://twitter.com/GenesysGo"
              target="_blank"
            >
              @GenesysGo
            </Link>{" "}
            and Multisig by{" "}
            <Link
              className="underline hover:text-fire-orange text-fire-yellow transition-all"
              href="https://twitter.com/SquadsProtocol"
              target="_blank"
            >
              @SquadsProtocol
            </Link>
            .
            <br />
            Yes it&apos;s similar to Fireb*** but 3x better!
          </span>
          <Link href="https://app.firethree.xyz" target="_blank">
            <button className="text-lg text-white bg-white/10 h-[50px] px-20 md:px-28 mt-4 rounded-xl border border-white/30 hover:opacity-80 transition-all">
              Create Project
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <hr className="border-white/10 w-full" />

          <div className="flex items-center justify-between h-[70px]">
            <span className="text-sm text-white/30 pl-5">Firethree © 2023</span>

            <span className="text-sm text-white/30 pr-5">Hyperdrive 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
