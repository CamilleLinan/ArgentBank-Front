import { FC, FormEvent, useEffect, useState } from "react";
import "./_UserHeader.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import userService from "../../../services/user.service";
import { updateUserProfile } from "../../../redux/slice/userSlice";

const UserHeader: FC = () => {
  const { userData } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [onEditMode, setOnEditMode] = useState<boolean>(false);
  const [firstName, setFirstname] = useState<string>(userData?.firstName || "");
  const [lastName, setLastname] = useState<string>(userData?.lastName || "");

  useEffect(() => {
    if (userData) {
      setFirstname(userData.firstName);
      setLastname(userData.lastName);
    }
  }, [userData]);

  const handleEditMode = () => {
    setOnEditMode((onEditMode) => !onEditMode);
    if (onEditMode && userData) {
      setFirstname(userData.firstName);
      setLastname(userData.lastName);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await userService.updateUserProfile(firstName, lastName);
      if (response?.success && response?.data) {
        dispatch(
          updateUserProfile({ firstName: firstName, lastName: lastName })
        ).unwrap();
        setOnEditMode(false);
      }
    } catch (error) {
      console.error("Failed to update user profile", error);
    }
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {onEditMode ? (
          <form onSubmit={onSubmit} className="header-form">
            <div className="header-form-inputs">
              <div className="header-form-inputs-input">
                <label htmlFor="firstName">Firstname</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value.trim())}
                />
              </div>
              <div className="header-form-inputs-input">
                <label htmlFor="lastName">Lastname</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value.trim())}
                />
              </div>
            </div>
            <button type="submit" className="button button-submit">
              Submit
            </button>
          </form>
        ) : (
          <>
            {firstName} {lastName}!
          </>
        )}
      </h1>
      <button className="button" onClick={handleEditMode}>
        Edit Name
      </button>
    </div>
  );
};

export default UserHeader;
