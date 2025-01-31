import React, { useState } from "react";

const seatsData = Array.from({ length: 5 }, (_, row) =>
  Array.from({ length: 5 }, (_, col) => ({ row, col, reserved: false }))
);

export default function SeatManagement() {
  const [seats, setSeats] = useState(seatsData);

  const toggleSeat = (rowIndex, colIndex) => {
    setSeats((prevSeats) =>
      prevSeats.map((row, rIdx) =>
        row.map((seat, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? { ...seat, reserved: !seat.reserved }
            : seat
        )
      )
    );
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">座席管理アプリ</h1>
      <div className="grid grid-cols-5 gap-2">
        {seats.flat().map((seat, index) => (
          <button
            key={index}
            className={`w-16 h-16 flex items-center justify-center rounded-lg border shadow-md transition-all ${
              seat.reserved ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
            onClick={() => toggleSeat(seat.row, seat.col)}
          >
            {seat.row + 1}-{seat.col + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
