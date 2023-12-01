import "./DropFile.scss";
import instructionImg from "../../../public/Vector.svg";
import Instruction from "../../Component/Modal/Instruction/Instruction.jsx";
import { useState } from "react";
export default function DropFile() {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="dropfile" onClick={() => setModalState(true)}>
      <img src={instructionImg} alt="" />
      {modalState && (
        <Instruction
          onDestroy={(event) => {
            event.stopPropagation();
            setModalState(false);
          }}
        />
      )}
    </div>
  );
}
