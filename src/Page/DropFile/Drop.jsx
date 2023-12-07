import "./DropFile.scss";
import { useState } from "react";
import instructionImg from "../../../public/Vector.svg";
import Instruction from "../../Component/Modal/Instruction/Instruction.jsx";
import FileUpload from "./component/FileUpload/FileUpload.jsx";
export default function DropFile() {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="dropfile">
      <section className="drag-and-drop">
        <div className="drag-and-drop-div">
          <div className="drag-and-drop-content">
            <div className="drag-and-drop-border">
              <FileUpload />
            </div>
          </div>
        </div>
      </section>
      <section
        className="modal-instruction"
        onClick={() => setModalState(true)}
      >
        <img src={instructionImg} alt="" />
        {modalState && (
          <Instruction
            onDestroy={(event) => {
              event.stopPropagation();
              setModalState(false);
            }}
          />
        )}
      </section>
    </div>
  );
}
