import { FC } from "react";
import "./_AccountTile.scss";

interface AccountTileProps {
  classTile?: string;
  title: string;
  amount: string;
  description: string;
  onNavigate?: () => void;
}

const AccountTile: FC<AccountTileProps> = ({
  classTile,
  title,
  amount,
  description,
  onNavigate,
}) => {
  return (
    <section className={`account ${classTile}`}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={onNavigate}>
          View transactions
        </button>
      </div>
    </section>
  );
};

export default AccountTile;
