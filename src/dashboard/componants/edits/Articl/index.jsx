import React from "react";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";

function Articl({ editTitle = false, text,title,rows }) {
  return (
    <div className="w-full">
      <div className="font-semibold text-[16px] mb-2">
        {title} {editTitle && <ModeEditTwoToneIcon sx={{ color: "#606060", cursor: "pointer" }} />}
      </div>
      <textarea
      defaultValue={text}
        rows={rows} // حساب عدد الأسطر بناءً على النص المعطى
        className=" bg-Grayblack rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px] w-full"
      >
      </textarea>
    </div>
  );
}

export default Articl;
