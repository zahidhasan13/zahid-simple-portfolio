"use client";
import React, { useState } from "react";

const page = () => {
  return (
    <section className="bg-[#20242D] min-h-screen text-white">
      <div className="max-w-screen-xl px-4 pt-16 mx-auto lg:pt-32">
        <div className="text-center mb-10">
          <h1 className="lg:text-4xl font-semibold uppercase border-b-2 pb-1">
            My <span className="text-[#04D1E0]">Skill</span>
          </h1>
        </div>
        <div className="space-y-5">
          <h2>HTML</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <h2>CSS</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
          <h2>Bootstrap</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
          <h2>Tailwind CSS</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
          <h2>JavaScript</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-yellow-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
          <h2>ReactJS</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
          <h2>NodeJS</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-green-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>
          <h2>MongoDB</h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
