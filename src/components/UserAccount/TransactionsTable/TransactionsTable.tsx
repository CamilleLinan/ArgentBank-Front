import React, { FC, useState } from "react";
import "./_TransactionsTable.scss";
import { Transaction } from "../../../models/transaction.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const arrowDown = <FontAwesomeIcon icon={faChevronDown} />;
const pen = <FontAwesomeIcon icon={faPen} />;

const categoriesOptions = [
  "Dining",
  "Income",
  "Utilities",
  "Transportation",
  "Groceries",
  "Entertainment",
  "Shopping",
];
interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions }) => {
  const [openTransactionId, setOpenTransactionId] = useState<string | null>(
    null
  );
  const [editCategoryMode, setEditCategoryMode] = useState<boolean>(false);
  const [editNotesMode, setEditNotesMode] = useState<boolean>(false);

  const toggleTransaction = (id: string) => {
    setOpenTransactionId(openTransactionId === id ? null : id);
  };

  const handleCategoryMode = () => {
    setEditCategoryMode((editCategoryMode) => !editCategoryMode);
  };
  const handleNotesMode = () => {
    setEditNotesMode((editNotesMode) => !editNotesMode);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, "MMMM do, yyyy");
  };

  return (
    <section className="transactions">
      <table className="table">
        <thead className="table-thead">
          <tr>
            <th scope="col"></th>
            <th scope="col">DATE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">BALANCE</th>
          </tr>
        </thead>
        <tbody className="table-tbody">
          {transactions.map((transaction) => (
            <React.Fragment key={transaction.id}>
              <tr
                onClick={() => toggleTransaction(transaction.id)}
                className="transaction-infos"
              >
                <th scope="row">{arrowDown}</th>
                <td className="date">{formatDate(transaction.date)}</td>
                <td>{transaction.description}</td>
                <td
                  className={
                    transaction.amount.includes("-")
                      ? "amount-negative"
                      : "amount-positive"
                  }
                >
                  {transaction.amount}$
                </td>
                <td>{transaction.balance}$</td>
              </tr>
              {openTransactionId === transaction.id && (
                <tr className="transactions-details">
                  <td></td>
                  <td colSpan={4} align="left">
                    <div className="transactions-details-container">
                      <span className="transactions-details-container-label">
                        Transaction type:
                      </span>{" "}
                      {transaction.type}
                    </div>
                    <div className="transactions-details-container">
                      <span className="transactions-details-container-label">
                        Category:
                      </span>{" "}
                      {editCategoryMode ? (
                        <>
                          <label htmlFor="category"></label>
                          <select
                            name="category"
                            id="category"
                            defaultValue={transaction.category}
                          >
                            {categoriesOptions.map((o, i) => (
                              <option value={o} key={i}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </>
                      ) : (
                        <>{transaction.category}</>
                      )}
                      <span
                        className="transactions-details-icon"
                        onClick={handleCategoryMode}
                      >
                        {pen}
                      </span>
                    </div>
                    <div className="transactions-details-container">
                      <span className="transactions-details-container-label">
                        Notes:
                      </span>{" "}
                      {editNotesMode ? (
                        <>
                          <label htmlFor="notes"></label>
                          <input
                            type="text"
                            name="notes"
                            id="notes"
                            defaultValue={transaction.notes}
                          />
                        </>
                      ) : (
                        <>{transaction.notes}</>
                      )}
                      <span
                        className="transactions-details-icon"
                        onClick={handleNotesMode}
                      >
                        {pen}
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionsTable;
