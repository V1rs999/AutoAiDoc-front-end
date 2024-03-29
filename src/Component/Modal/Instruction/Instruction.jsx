import PropTypes from "prop-types";
import "./Instruction.scss";
import InstructionIMG from "../../../../public/10840255_4436220 1 (1).svg";

const Instruction = ({ onDestroy }) => {
  const closeWnd = (event) => {
    if (event.target.className === "instruction-modal") {
      onDestroy(event);
    }
  };

  return (
    <div onClick={closeWnd} className="instruction-modal">
      <div className="instruction-modal-content">
        <i
          className="instruction-modal-content-close"
          role="button"
          onClick={onDestroy}
        >
          X
        </i>
        <img src={InstructionIMG} alt="InstructionIMG" />
      </div>
    </div>
  );
};

Instruction.propTypes = {
  onDestroy: PropTypes.func.isRequired,
};

export default Instruction;
