import React from "react";
import Link from "next/link";
import Image from "next/image";

import PagesDropdown from "./PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="300.000000pt"
                  height="202.000000pt"
                  viewBox="0 0 1023.000000 202.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)"
                    fill="#ffff"
                    stroke="none"
                  >
                    <path
                      d="M0 1010 l0 -1010 5115 0 5115 0 0 1010 0 1010 -5115 0 -5115 0 0
-1010z m3166 707 c79 -17 114 -39 114 -74 0 -28 -25 -63 -45 -63 -7 0 -32 9
-56 20 -75 34 -190 22 -228 -24 -20 -24 -17 -92 5 -118 11 -11 69 -44 129 -73
128 -60 166 -89 194 -148 27 -56 28 -165 2 -222 -52 -114 -201 -163 -352 -115
-67 21 -93 38 -122 80 -22 32 -22 51 3 78 28 29 43 28 84 -8 69 -61 147 -75
222 -41 49 22 69 63 61 122 -8 59 -37 84 -174 150 -87 42 -128 68 -146 91 -82
111 -52 259 64 319 77 39 147 46 245 26z m605 -12 c91 -32 148 -105 149 -187
0 -49 -35 -75 -82 -62 -27 8 -34 16 -44 59 -18 71 -50 95 -122 95 -129 0 -142
-27 -142 -305 0 -180 3 -215 18 -245 23 -48 73 -72 136 -67 61 5 100 43 111
106 7 43 27 61 66 61 55 0 75 -63 44 -138 -37 -86 -121 -135 -235 -136 -91 0
-141 16 -191 61 -61 55 -69 97 -69 367 0 221 1 233 24 281 13 28 32 58 43 68
59 52 205 73 294 42z m610 3 c57 -16 114 -70 136 -126 16 -41 18 -78 18 -287
0 -238 0 -240 -26 -290 -31 -61 -90 -100 -171 -115 -101 -19 -224 17 -265 77
-45 65 -48 88 -48 333 0 200 3 242 18 281 21 55 69 104 122 123 49 18 164 20
216 4z m403 -4 c14 -13 16 -56 16 -316 0 -327 3 -350 57 -379 41 -22 126 -18
160 7 52 38 53 46 53 371 0 333 0 333 63 333 64 0 62 12 62 -332 0 -342 -3
-362 -58 -424 -39 -45 -68 -60 -145 -74 -127 -23 -244 23 -291 115 l-26 50 -3
316 c-3 283 -2 318 13 333 21 20 79 21 99 0z m1034 4 c17 -17 15 -64 -4 -82
-12 -12 -37 -16 -105 -16 l-89 0 0 -340 c0 -327 -1 -341 -20 -360 -24 -24 -67
-26 -92 -3 -17 15 -18 40 -18 360 l0 343 -93 0 c-103 0 -117 7 -117 55 0 17 5
36 12 43 17 17 509 17 526 0z m2387 -92 c84 -24 352 -132 612 -247 122 -55
229 -99 237 -99 21 0 241 -57 331 -87 106 -34 222 -93 263 -134 67 -66 97
-162 108 -343 9 -139 12 -136 -147 -136 l-117 0 -7 78 c-12 140 -75 236 -193
290 -43 19 -70 24 -136 24 -95 1 -150 -19 -214 -77 -63 -56 -86 -113 -92 -225
l-5 -95 -835 0 -835 0 -8 70 c-11 102 -33 158 -83 214 -83 92 -195 127 -312
97 -149 -38 -230 -139 -241 -301 l-6 -80 -89 -3 c-49 -2 -94 2 -99 7 -5 5 -12
61 -15 124 -4 100 0 142 28 311 l34 197 170 83 c94 45 279 135 411 199 l240
117 130 15 c188 22 211 23 525 20 232 -2 296 -5 345 -19z m-1248 -735 c164
-75 204 -299 76 -427 -49 -49 -90 -67 -168 -72 -87 -5 -157 21 -210 79 -49 55
-68 103 -68 179 0 107 53 192 148 236 64 30 161 32 222 5z m2307 4 c49 -21
113 -80 139 -129 31 -58 30 -174 0 -232 -29 -54 -101 -117 -151 -132 -50 -15
-124 -15 -174 0 -50 15 -122 78 -151 132 -30 58 -31 174 0 231 27 50 77 99
128 124 50 25 156 28 209 6z m-3874 -361 c0 -112 -3 -145 -12 -142 -9 3 -14
42 -16 138 -3 138 1 166 18 155 6 -4 10 -65 10 -151z m90 0 c0 -112 -3 -145
-12 -142 -9 3 -14 42 -16 138 -3 138 1 166 18 155 6 -4 10 -65 10 -151z
m-2738 118 c27 -28 32 -65 10 -91 -18 -23 -18 -24 6 -48 19 -19 23 -31 18 -56
-10 -51 -38 -67 -117 -67 l-69 0 0 138 c0 76 3 142 8 146 13 14 125 -3 144
-22z m2318 13 c16 -9 33 -27 36 -41 7 -27 -5 -49 -14 -25 -10 28 -51 61 -77
61 -14 0 -37 -11 -51 -25 -23 -24 -25 -28 -12 -47 8 -12 44 -34 79 -48 74 -29
100 -64 80 -107 -15 -32 -74 -56 -119 -48 -37 7 -82 45 -82 70 0 24 19 18 30
-10 16 -42 117 -51 142 -13 23 37 -1 67 -76 92 -62 20 -86 42 -86 76 0 66 81
101 150 65z m-340 -40 c0 -18 5 -25 20 -25 11 0 20 -4 20 -10 0 -5 -9 -10 -20
-10 -18 0 -20 -7 -20 -80 0 -78 1 -81 27 -91 20 -7 23 -13 15 -21 -9 -9 -18
-9 -37 0 -24 11 -25 15 -25 102 0 83 -1 90 -20 90 -11 0 -20 4 -20 9 0 5 9 11
20 14 12 3 20 14 20 26 0 12 5 21 10 21 6 0 10 -11 10 -25z m-1335 -45 c9 -10
19 -34 22 -54 l6 -36 -77 0 c-62 0 -76 -3 -76 -16 0 -52 54 -83 103 -59 36 18
48 12 24 -13 -11 -10 -33 -17 -57 -17 -76 0 -119 80 -86 158 25 60 102 81 141
37z m170 9 c-4 -5 -13 -9 -22 -9 -39 0 -53 -30 -53 -112 0 -59 -3 -79 -12 -76
-18 6 -24 187 -7 202 8 8 13 7 16 -2 3 -8 9 -10 16 -3 25 20 74 20 62 0z m496
-5 c10 -12 14 -12 30 2 24 22 89 21 105 -1 27 -37 32 -184 7 -193 -10 -3 -13
18 -13 80 0 91 -8 108 -49 108 -48 0 -56 -14 -61 -101 -3 -53 -9 -84 -17 -87
-10 -3 -13 18 -13 80 0 90 -8 108 -49 108 -47 0 -61 -25 -61 -112 0 -59 -3
-79 -12 -76 -18 6 -24 187 -7 202 8 8 13 8 16 -1 3 -9 12 -8 34 1 35 15 73 10
90 -10z m366 -29 c26 -54 14 -65 -67 -65 -57 0 -70 -3 -70 -16 0 -52 54 -83
103 -59 36 18 48 12 24 -13 -28 -27 -92 -22 -124 11 -24 23 -28 36 -28 81 0
43 5 60 24 80 43 46 112 36 138 -19z m210 -3 c22 -54 14 -62 -67 -62 -57 0
-70 -3 -70 -16 0 -52 54 -83 103 -59 17 8 33 13 36 10 10 -11 -27 -36 -62 -42
-32 -5 -41 -1 -73 31 -34 34 -36 40 -32 87 6 54 35 95 72 101 40 7 77 -13 93
-50z m680 0 c22 -54 14 -62 -67 -62 -67 0 -70 -1 -70 -23 0 -46 58 -76 102
-53 15 8 30 11 33 6 6 -10 -46 -40 -69 -40 -83 0 -128 120 -71 189 45 52 116
44 142 -17z m390 0 c22 -54 14 -62 -67 -62 -57 0 -70 -3 -70 -16 0 -52 54 -83
103 -59 36 18 48 12 24 -13 -28 -27 -92 -22 -124 11 -24 23 -28 36 -28 81 0
43 5 60 24 80 44 47 114 36 138 -22z m153 37 c0 -5 -8 -9 -17 -9 -39 0 -53
-29 -53 -112 0 -59 -3 -79 -12 -76 -18 6 -24 187 -7 202 8 8 13 8 16 -1 3 -8
11 -8 30 2 27 14 43 12 43 -6z m-2999 -56 c1 -100 8 -117 48 -121 56 -6 71 18
71 110 0 45 4 78 10 78 6 0 10 -41 10 -104 0 -101 -1 -104 -22 -104 -13 1 -37
-3 -55 -7 -26 -6 -36 -3 -57 18 -24 24 -26 33 -26 112 0 50 4 85 10 85 6 0 10
-30 11 -67z m234 -13 c16 -44 32 -80 36 -80 4 0 19 36 34 80 15 44 31 80 36
80 16 0 10 -21 -38 -153 -46 -129 -66 -156 -101 -142 -14 5 -12 8 8 18 14 7
31 24 38 39 11 23 8 38 -28 129 -22 57 -40 104 -40 106 0 2 6 3 13 3 7 0 26
-36 42 -80z m680 -5 c0 -11 -59 -19 -82 -11 -8 3 -11 11 -8 16 8 14 90 9 90
-5z"
                    />
                    <path
                      d="M4184 1576 l-34 -34 0 -231 c0 -260 3 -276 66 -306 53 -25 119 -14
159 25 l30 30 0 246 0 246 -33 29 c-28 25 -40 29 -93 29 -56 0 -64 -3 -95 -34z"
                    />
                    <path
                      d="M7516 1509 c-101 -13 -147 -37 -200 -106 -49 -62 -104 -158 -95 -167
3 -3 108 -12 235 -20 126 -9 259 -18 297 -21 l67 -6 0 59 c0 32 -3 107 -7 165
l-6 107 -111 -1 c-61 -1 -142 -6 -180 -10z"
                    />
                    <path
                      d="M7924 1359 c5 -90 12 -166 17 -169 13 -9 917 -43 929 -35 37 23 -11
62 -191 153 -259 131 -471 199 -659 209 l-105 6 9 -164z"
                    />
                    <path
                      d="M6774 716 c-28 -28 -34 -42 -34 -75 0 -56 40 -100 95 -107 115 -14
169 137 71 197 -49 30 -92 25 -132 -15z"
                    />
                    <path
                      d="M9115 738 c-37 -20 -55 -51 -54 -98 0 -48 9 -66 49 -93 44 -31 108
-17 147 33 19 23 16 101 -5 126 -34 42 -94 56 -137 32z"
                    />
                    <path
                      d="M2610 590 l0 -50 46 0 c61 0 84 14 84 50 0 36 -23 50 -84 50 l-46 0
0 -50z"
                    />
                    <path
                      d="M2610 455 l0 -55 53 0 c60 0 87 19 87 61 0 38 -19 49 -82 49 l-58 0
0 -55z"
                    />
                    <path
                      d="M3274 545 c-22 -34 -11 -45 52 -45 57 0 66 9 44 51 -16 29 -75 26
-96 -6z"
                    />
                    <path
                      d="M4296 548 c-28 -40 -21 -48 44 -48 53 0 60 2 60 19 0 49 -76 70 -104
29z"
                    />
                    <path
                      d="M4506 548 c-28 -40 -21 -48 44 -48 52 0 60 3 60 18 0 48 -76 70 -104
30z"
                    />
                    <path
                      d="M5187 552 c-34 -38 -22 -52 43 -52 52 0 60 3 60 18 0 46 -72 69 -103
34z"
                    />
                    <path
                      d="M5576 548 c-28 -40 -21 -48 44 -48 52 0 60 3 60 18 0 48 -76 70 -104
30z"
                    />
                  </g>
                </svg>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-auth-navbar"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-auth-navbar"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
