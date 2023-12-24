import "./PersonalSet.scss";
import PersonalSetImg from "../../../public/unsplash_LaZ6LlfVZ4Q.png";
import SetAvatar from "./component/SetAvatar/SetAvatar.jsx";
import PersonalSetForm from "./component/PersonalSetForm/PersonalSetForm.jsx";
export default function PersonalSet() {
  const { userId: userId } =
    JSON.parse(localStorage.getItem("User Param")) || {};
  console.log(userId);
  return (
    <section className={"PersonalSet"}>
      <section className={"PersonalSet-wrapper"}>
        <section>
          <img src={PersonalSetImg} className={"PersonalSetImg"} alt="" />;
        </section>
        <section className={"PersonalSet-content"}>
          <div className={"PersonalSet-content-wrapper"}>
            <div className={"PersonalSet-content-child-wrapper"}>
              <div className={"PersonalSet-about"}>
                <h3 className={"PersonalSet-tittle"}>Personal Information</h3>
                <p className={"PersonalSet-description"}>
                  Update your account information
                </p>
              </div>
              <SetAvatar />
            </div>
            <PersonalSetForm />
          </div>
        </section>
      </section>
    </section>
  );
}
