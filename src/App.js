import "./App.css";
import logo from "./logo192.png";
import { FaStar, FaUserFriends, FaGraduationCap } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { TiMessages } from "react-icons/ti";
import { FiSettings, FiDownload } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiFillClockCircle,
  AiOutlineCalendar,
} from "react-icons/ai";
import {
  BsThreeDots,
  BsFillLightningChargeFill,
  BsBagCheck,
} from "react-icons/bs";
import { FaLaptop, FaPaintBrush } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import {
  MdOutlineSortByAlpha,
  MdNotificationsNone,
  MdOutlineAccountBalanceWallet,
  MdLocalPharmacy,
} from "react-icons/md";
import { IoScanSharp, IoSend } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function App() {
  return (
    <div className="inline-block w-full h-screen bg-slate-500">
      <div className=" flex  h-5/6 w-11/12 mx-auto mt-8 overflow-hidden rounded-3xl  ">
        <div className=" py-8 bg-blue-300 w-full h-full basis-3/5  flex self-center  ">
          <div className="flex items-center   flex-col w-full h-full  basis-1/3 border-r-2 border-x-blue-400 ">
            <h2 className="font-bold text-lg text-slate-800 ">Syncline</h2>
            <div className="mt-8 h-36 flex  flex-col justify-around items-center">
              <img
                alt="user"
                src={logo}
                className="h-20 w-20 rounded-full   bg-white "
              />
              <p className="text-lg text-slate-700 font-semibold">
                {" "}
                Jennifer Cooper
              </p>
              <div className="flex items-center justify-center h-6 w-14 mt-2 bg-white rounded-full text-center">
                <FaStar className="text-yellow-300" />
                <p>9.5</p>
              </div>
            </div>
            <div className="flex flex-col h-full justify-between items-center">
              <div className="flex flex-col mt-20  items-centers   ">
                <div className="group h-14 w-32 flex items-center cursor-pointer ">
                  <BiDesktop className="w-6 h-6 text-slate-500 group-hover:text-black" />
                  <p className="text-xl text-slate-500 ml-2  group-hover:text-black  font-semibold ">
                    Dashbord
                  </p>
                </div>
                <div className=" group h-14  w-32 flex items-center  cursor-pointer">
                  <ImBooks className="w-6 h-6 text-slate-500 group-hover:text-black" />
                  <p className="text-xl text-slate-500 ml-2  font-semibold group-hover:text-black ">
                    Lessons
                  </p>
                </div>{" "}
                <div className="group h-14  w-32 flex items-center  cursor-pointer">
                  <FaUserFriends className="w-6 h-6 text-slate-500 group-hover:text-black" />
                  <p className="text-xl text-slate-500 ml-2  font-semibold group-hover:text-black ">
                    Students
                  </p>
                </div>{" "}
                <div className="group h-14  w-32 flex items-center  cursor-pointer">
                  <TiMessages className="w-6 h-6 text-slate-500 group-hover:text-black" />
                  <p className="text-xl text-slate-500 ml-2  font-semibold group-hover:text-black ">
                    Messages
                  </p>
                </div>{" "}
                <div className="group h-14  w-32 flex items-center  cursor-pointer">
                  <FaGraduationCap className="w-6 h-6 text-slate-500 bg-transparent group-hover:text-black" />
                  <p className="text-xl text-slate-500 ml-2  font-semibold group-hover:text-black ">
                    Grades
                  </p>
                </div>
              </div>
              <div className="group h-14  w-32 flex items-center  cursor-pointer">
                <FiSettings className="w-6 h-6 text-slate-800 bg-transparent group-hover:text-black" />
                <p className="text-xl text-slate-800 ml-2  font-semibold group-hover:text-black ">
                  Setting
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full h-full  basis-2/3 mx-14">
            <div className="flex  justify-center ">
              <AiOutlineSearch className="h-5 w-5 text-slate-800" />
              <input
                className=" pl-2 h-5 bg-transparent outline-0 placeholder:text-slate-500 placeholder:text-sm"
                placeholder="Search something"
              />
            </div>
            <h1 className=" mt-5 w-80 text-4xl font-serif  font-extrabold italic">
              Good Morning, Jennifer{" "}
            </h1>
            <p className="text-slate-700 w-[330px] mt-8">
              {" "}
              open your panel and watch your progress and growth in knowledge{" "}
            </p>
            <button className="w-60 h-12 mt-8 rounded-xl text-white text-base font-semibold font-serif bg-red-400 hover:shadow-lg hover:-translate-x-1">
              See all suggestions{" "}
            </button>
            <div className="flex w-full  justify-between items-center mt-10">
              <h2 className=" text-xl font-bold text-slate-800 font-serif  ">
                Choose a specialization
              </h2>
              <BsThreeDots className=" h-5 w-6 cursor-pointer" />
            </div>
            <div className="flex w-full justify-around mt-10">
              <div className=" flex flex-col  justify-center items-center cursor-pointer shadow-lg hover:-translate-y-1  w-20 h-[80px] rounded-2xl bg-white">
                <FaLaptop className="text-blue-500" />
                <p className="text-sm text-slate-400">IT</p>
              </div>
              <div className=" flex flex-col  justify-center items-center cursor-pointer shadow-lg hover:-translate-y-1   w-20 h-[80px] rounded-2xl bg-white">
                <BsFillLightningChargeFill className="text-red-600" />
                <p className="text-sm text-slate-400">Design</p>
              </div>
              <div className=" flex flex-col  justify-center items-center cursor-pointer shadow-lg hover:-translate-y-1  w-20 h-[80px] rounded-2xl bg-white">
                <FaPaintBrush className="text-yellow-300" />
                <p className="text-sm text-slate-400">Art</p>
              </div>
              <div className=" flex flex-col  justify-center items-center cursor-pointer shadow-lg hover:-translate-y-1 w-20 h-[80px] rounded-2xl bg-white">
                <HiUserGroup className="text-violet-700" />
                <p className="text-sm text-slate-400">Social</p>
              </div>
              <div className=" flex flex-col  justify-center items-center cursor-pointer shadow-lg  hover:-translate-y-1  w-20 h-[80px] rounded-2xl bg-white">
                <MdOutlineSortByAlpha className="text-green-500" />
                <p className="text-sm text-slate-400">Lettering</p>
              </div>
            </div>
            <div className="flex w-full  justify-between items-center mt-12">
              <h2 className=" text-xl font-bold text-slate-800 font-serif  ">
                Schedule
              </h2>
              <p className="text-sm text-slate-600 cursor-pointer">See all</p>
            </div>
            <div className="flex w-full justify-between mt-12 ">
              <div className=" flex  ">
                <div className="w-12 h-12 rounded-full border-2 bg-transparent flex justify-center items-center  bg-white">
                  <p className="text-black font-semibold ">05</p>
                </div>
                <div className="flex flex-col ml-2">
                  <p className="text-slate-800 text-sm font-bold ">
                    UX/UI Workshop
                  </p>
                  <p className="text-slate-500 text-sm  ">
                    10 of 45 chapters . Mrs. Wilson
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <AiFillClockCircle className="text-slate-800 cursor-pointer" />
                <p className="font-bold text-slate-800 text-sm"> 14:00-14-45</p>
              </div>
            </div>
            <div className="flex w-full justify-between mt-5 ">
              <div className=" flex  ">
                <div className="w-12 h-12 rounded-full border-2 bg-transparent flex justify-center items-center  bg-white">
                  <p className="text-black font-semibold ">06</p>
                </div>
                <div className="flex flex-col ml-2">
                  <p className="text-slate-800 text-sm font-bold ">
                    Interaction Design
                  </p>
                  <p className="text-slate-500 text-sm  ">
                    5 of 45 chapters . Mrs. Wilson
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <AiFillClockCircle className="text-slate-800 cursor-pointer" />
                <p className="font-bold text-slate-800 text-sm"> 15:00-15-45</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" basis-2/5 bg-white  py-8 px-8">
          <div className="flex justify-end items-center">
            <div className="flex justify-between w-14 mr-10">
              <MdNotificationsNone className="h-6 w-6 cursor-pointer" />
              <AiOutlineCalendar className="h-6 w-6 cursor-pointer" />
            </div>
            <div className="flex  ">
              <div className="h-10 w-10 bg-red-50 rounded-full cursor-pointer" />
              <div className="h-10 w-10 bg-green-300 rounded-full -ml-5 cursor-pointer" />
              <div className="h-10 w-10 bg-orange-400 rounded-full flex justify-center items-center -ml-4 cursor-pointer">
                <p className="text-white cursor-pointer">+</p>
              </div>
            </div>
          </div>
          <div className="flex w-[120%] justify-around mt-8 -ml-28">
            <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 -ml-10" />
            <div className="w-48 h-60 rounded-2xl shadow-lg border-2 bg-white flex flex-col  items-center ">
              <div className="h-28 w-28 bg-red-500 rounded-full flex justify-center items-center shadow-lg mt-6 bg-gradient-to-r from-orange-500 to-violet-600">
                <div className="h-24 w-24 bg-white rounded-full flex justify-center items-center">
                  <div className="h-4 w-4 bg-orange-500 -translate-x-1 -translate-y-7   rounded-full"></div>
                  <div className="h-16 w-16 flex justify-center items-center rounded-full shadow-lg mr-4 border-2 border-violet-50 ">
                    <p className="text-violet-600">82%</p>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium mt-2">Your day progress</p>
              <p className="text-sm text-slate-400 mt-2">
                You almost finish. <br /> Keep it up.
              </p>
            </div>

            <div className="w-48 h-60 rounded-2xl shadow-lg bg-red-100">
              <div className="w-full h-40">
                <div className="flex justify-center items-center rounded-md h-8 w-8 bg-white ml-32  -translate-y-4 ">
                  <IoScanSharp className="h-4 w-4  text-red-400 " />
                </div>
                <div className="flex justify-center items-center rounded-md h-8 w-8 bg-red-50 ml-32 translate-y-8 ">
                  <FiDownload className="h-4 w-4 text-sm text-red-400" />
                </div>
                <div className="flex justify-center items-center rounded-md h-8 w-8 bg-white ml-20 ">
                  <BsBagCheck className="h-4 w-4  text-red-400" />
                </div>
                <div className="flex justify-center items-center rounded-md h-8 w-8 bg-white ml-32 mt-2 ">
                  <MdOutlineAccountBalanceWallet className=" h-4 w-4 text-red-400" />
                </div>
                <div className="flex justify-center items-center rounded-md h-8 w-8 bg-red-50 ml-20 -translate-y-10 mt-2 " />

                <div className="h-8 w-8 bg-white -translate-x-2 -translate-y-24 rounded-md border-2" />
              </div>
              <p className="text-sm text-red-600 ml-4 font-semibold">
                Upgrade <br />
                to a pro plan
              </p>
              <p className=" text-sm text-red-200 ml-4 mt-2">$30 p/m</p>
            </div>

            <div className="w-48 h-60 flex  flex-col rounded-2xl shadow-lg bg-blue-300 ">
              <p className=" text-sm font-black ml-3 mt-4">
                Download apps <br />
                now!{" "}
              </p>
              <div className="flex h-full ">
                <div className="flex basis-1/4 flex-col ml-4 mb-6 justify-end">
                  <MdLocalPharmacy className="h-6 w-6 mb-3 text-slate-800" />
                  <IoSend className="h-6 w-6 text-slate-800" />
                </div>
                <div className="flex basis-3/4 ">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10">
            <p className=" font-black">May 2021 </p>
            <div className="flex w-20 justify-between">
              <IoIosArrowBack className="h-5 w-5 text-black cursor-pointer" />
              <IoIosArrowForward className="h-5 w-5 text-black cursor-pointer" />
            </div>
          </div>
          <div className="mt-3 flex">
            <div className=" h-20 w-16 flex flex-col justify-center items-center border-r-2 hover:scale-125  hover:rounded-2xl hover:shadow-lg hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Sun</p>
              <p className="font-semibold text-slate-800">2</p>
            </div>
            <div className=" iner h-20 w-16  flex flex-col justify-center items-center border-r-2 hover:scale-125  hover:rounded-2xl hover:shadow-lg hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Mon</p>
              <p className="font-semibold text-slate-800">3</p>
            </div>
            <div className="  h-20 w-16  flex flex-col justify-center items-center border-r-2 hover:scale-125  hover:rounded-2xl hover:shadow-lg hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Tue</p>
              <p className="font-semibold text-slate-800">4</p>
            </div>
            <div className="  h-20 w-16  flex flex-col justify-center items-center border-r-2 hover:scale-125 hover:rounded-2xl hover:shadow-lg hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Wed</p>
              <p className="font-semibold text-slate-800">5</p>
            </div>
            <div className="  h-20 w-16  flex flex-col justify-center items-center border-r-2 hover:scale-125 hover:rounded-2xl hover:shadow-lg hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Thu</p>
              <p className="font-semibold text-slate-800">6</p>
            </div>
            <div className="  h-20 w-16  flex flex-col justify-center items-center border-r-2  hover:scale-125 hover:rounded-2xl hover:shadow-lg hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Fri</p>
              <p className="font-semibold text-slate-800">7</p>
            </div>
            <div className="  h-20 w-16  flex flex-col justify-center items-center border-r-2 hover:scale-125 hover:rounded-2xl hover:shadow-2xl hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Sat</p>
              <p className="font-semibold text-slate-800">8</p>
            </div>
            <div className="  h-20 w-16  flex flex-col justify-center items-center border-r-2 hover:scale-125 hover:rounded-2xl hover:shadow-2xl hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Sat</p>
              <p className="font-semibold text-slate-800">8</p>
            </div>
            <div className="  h-20 w-16  flex flex-col justify-center items-center border-r-2 hover:scale-125 hover:rounded-2xl hover:shadow-2xl hover:bg-white">
              <p className="text-sm font-serif text-slate-500">Sat</p>
              <p className="font-semibold text-slate-800">8</p>
            </div>
          </div>
          <p className=" text-lg font-semibold text-slate-800 font-serif mt-5 ">
            Total hours spent
          </p>
          <div className="mt-5  flex w-full justify-around">
        <div className="flex flex-col justify-around items-end w-">
        <p className="text-sm text-slate-600"> 8h</p>
        <p className="text-sm text-slate-600"> 6h</p>
        <p className="text-sm text-slate-600"> 4h</p>
        <p className="text-sm text-slate-600"> 2h</p>
        <p className="text-sm text-slate-600"> 0h</p>

      </div>
    <div className="flex justify w-full justify-around">
   
      <div class="w-4 bg-gray-200 h-32 rounded-lg flex flex-col justify-end ">
        <div class="bg-violet-600  rounded-lg h-[50%]" />
    </div>
     <div class="w-4 bg-gray-200 h-32 rounded-lg flex flex-col justify-end ">
        <div class="bg-violet-600  rounded-lg h-[75%]" />
    </div>
     <div class="w-4 bg-gray-200 h-32 rounded-lg flex flex-col justify-end ">
        <div class="bg-violet-600  rounded-lg h-[20%]" />
    </div>
     <div class="w-4 bg-gray-200 h-32 rounded-lg flex flex-col justify-end ">
        <div class="bg-violet-600  rounded-lg h-[95%]" />
    </div>
     <div class="w-4 bg-gray-200 h-32 rounded-lg flex flex-col justify-end ">
        <div class="bg-violet-600  rounded-lg h-[85%]" />
    </div>
     <div class="w-4 bg-gray-200 h-32 rounded-lg flex flex-col justify-end ">
        <div class="bg-violet-600  rounded-lg h-[99%]" />
    </div>
    <div class="w-4 bg-gray-200 h-32 rounded-lg flex flex-col justify-end ">
        <div class="bg-violet-600  rounded-lg h-[99%]" />
    </div>
    </div>

   
        </div>
         <div className="flex justify-around ml-4 mt-2 ">
      <p className="text-sm text-slate-600">Sun</p>
      <p className="text-sm text-slate-600">Mon</p>
      <p className="text-sm text-slate-600">Tue</p>
      <p className="text-sm text-slate-600">Wed</p>
      <p className="text-sm text-slate-600">Thu</p>
      <p className="text-sm text-slate-600">Fri</p>
      <p className="text-sm text-slate-600"> Sat</p>

      
    </div>
                  </div>

      </div>
    </div>
  );
}

export default App;
