import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";

const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <ul className={styles.transactions}>
      {transactions.length > 0
        ? transactions.map((transaction) => (
            <li key={transaction.id}>
              <p className={styles.name}>{transaction.name}</p>
              <p className={styles.amount}>{transaction.amount}lei</p>
              <button onClick={() => deleteDocument(transaction.id)}>x</button>
            </li>
          ))
        : "No transactions"}
    </ul>
  );
};

export default TransactionList;
