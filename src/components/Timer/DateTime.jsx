import { useEffect, useState } from "react";
import { formatDate } from "../../utils/Provider";

export function DateTime() {
  const currentDate = new Date();
  const formatedDate = formatDate(currentDate);
  const [date, setDate] = useState({
    second: "00",
    minute: "00",
    hour: "00",
    day: "00",
    month: "00",
    year: "0000",
  });
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      setDate({
        second: String(now.getSeconds()).padStart(2, "0"),
        minute: String(now.getMinutes()).padStart(2, "0"),
        hour: String(now.getHours()).padStart(2, "0"),
        day: String(now.getDate()).padStart(2, "0"),
        month: String(now.getMonth() + 1).padStart(2, "0"),
        year: String(now.getFullYear()),
      });
    };
    updateDate();
    const intervalId = setInterval(updateDate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card date-time shadow">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 63 53"
          fill="none"
        >
          <path
            d="M6.95972 20.9792H55.6855V44.1667C55.6855 45.3864 54.5374 46.375 53.121 46.375H9.52423C8.10789 46.375 6.95972 45.3864 6.95972 44.1667V20.9792Z"
            fill="#E0F2FE"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M6.95972 9.93752C6.95972 8.71789 8.10789 7.72919 9.52423 7.72919H53.121C54.5374 7.72919 55.6855 8.71789 55.6855 9.93752V20.9792H6.95972V9.93752Z"
            fill="#E0F2FE"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M21.064 4.41669V13.25V4.41669Z" fill="#E0F2FE" />
          <path
            d="M21.064 4.41669V13.25"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M41.5806 4.41669V13.25V4.41669Z" fill="#E0F2FE" />
          <path
            d="M41.5806 4.41669V13.25"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M36.4514 37.5417H44.145H36.4514Z" fill="#E0F2FE" />
          <path
            d="M36.4514 37.5417H44.145"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M18.5 37.5417H26.1935H18.5Z" fill="#E0F2FE" />
          <path
            d="M18.5 37.5417H26.1935"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M36.4514 28.7083H44.145H36.4514Z" fill="#E0F2FE" />
          <path
            d="M36.4514 28.7083H44.145"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M18.5 28.7083H26.1935H18.5Z" fill="#E0F2FE" />
          <path
            d="M18.5 28.7083H26.1935"
            stroke="#112A42"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="date text-black">{formatedDate}</span>
      </div>
      <div className="flex justify-between align-middle">
        <span className=" text-white text-xl timestamp">
          {`${date.hour}:${date.minute}:${date.second} WIB`}
        </span>
        <svg className="object-contain text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 41 44"
          fill="none"
        >
          <path
            d="M13.4695 2H27.2328"
            stroke="red"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3511 17.8023V25.7035"
            stroke="red"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3511 41.5059C30.4862 41.5059 38.7022 34.431 38.7022 25.7035C38.7022 16.9761 30.4862 9.90118 20.3511 9.90118C10.2161 9.90118 2 16.9761 2 25.7035C2 34.431 10.2161 41.5059 20.3511 41.5059Z"
            stroke="red"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
