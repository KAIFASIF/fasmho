import { memo } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";

const AddCard = () => {
  return (
    <div className="w-56 flex justify-center items-center cursor-pointer h-full bg-gray-100 rounded border-2">
      <div className="rounded-full w-16 h-16 border-2 border-gray-400 border-dashed flex justify-center items-center">
        <MdOutlineLibraryAdd
          size={30}
          className="text-gray-400 hover:text-gray-200"
        />
      </div>
    </div>
  );
};

export default memo(AddCard);
