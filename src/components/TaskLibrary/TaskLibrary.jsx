
import CategoryItem from "../CategoryItem/CategoryItem";
import CategoryItemDnD from "../CategoryItem/CategoryItemDnD";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Popup from "reactjs-popup";
import NewTaskPopup from "../Popups/NewTaskPopup";
import "../Popups/Modal.css";

export default function TaskLibrary({ categories }) {
  return (
    <>
      <div className="flex flex-col items-center h-[90vh]">
        <div className="flex justify-between items-center px-6 py-3">
          <h2 className="flex items-center text-center">Task Library</h2>
          <button>
            <img
              className="h-6"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685131977/plus_fftfrp.png"
            />
          </button>
        </div>
        {/* {categories.map((category, idx) => {
          return (
            <div
              key={idx}
              className="hover:bg-[#5E5768] hover:text-white flex flex-row justify-between items-center  w-[12vw] mx-[1vw] my-[1vh] px-[1vmin] py-[1vmin] border-black border-[.2vmin] rounded-[5px]"
            >
              <CategoryItem category={category} />
              <div
                style={{ backgroundColor: category.color }}
                className="w-[2vmin] h-[2vmin] bg-[slate-500] rounded-[50%]"
              ></div>
            </div>
          );
        })} */}

        <SortableContext
          items={categories.map((category) => category.name)}
          strategy={verticalListSortingStrategy}
        >
          <div>
            {categories.map((category, idx) => {
              return (
                <div key={idx}>
                  <CategoryItemDnD category={category} />
                  <div style={{ backgroundColor: category.color }}></div>
                </div>
              );
            })}
          </div>
        </SortableContext>
      </div>
      <Popup
        trigger={
          <button className="modal border border-indigo-500"> Trigger</button>
        }
        modal
        nested
        position="center center"
      >
        {/* {close => ( */}
        <NewTaskPopup />
        {/* )} */}
      </Popup>
    </>
  );
}
