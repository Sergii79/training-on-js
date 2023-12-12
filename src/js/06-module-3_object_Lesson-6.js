console.log('---Example 4---');

// ## Example 4 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

// ```js
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
const TransactionTypes = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let transactionId = 1;

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    transactionId += 1;

    return {
      amount: amount,
      type: type,
      id: transactionId,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(
      amount,
      TransactionTypes.DEPOSIT
    );
    this.transactions.push(newTransaction);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, TransactionTypes.WITHDRAW)
    );
  },

  getMinTransaction() {
    let minAmount = this.transactions[0].amount;
    let minIndex = 0;

    for (let transaction of this.transactions) {
      const transactionKeys = Object.keys(transaction);

      for (let key of transactionKeys) {
        console.log(key, transaction[key]);
      }

      if (transaction.amount < minAmount) {
        minAmount = transaction.amount;
        minIndex = this.transactions.indexOf(transaction);
      }
    }

    return this.transactions[minIndex];
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  printTransactions() {
    console.log(this.transactions);
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let item of this.transactions) {
      if (item.id === id) return item;
    }

    return {};
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let result = 0;

    for (let item of this.transactions) {
      if (item.type === type) {
        console.log(item);
        result += item.amount;
      }
    }

    return result;
  },
};
// ```

account.deposit(1000);
account.deposit(500);
account.deposit(300);

account.withdraw(100);
account.withdraw(400);
account.withdraw(50);
account.printTransactions();

const currentbalance = account.getBalance();
console.log('currentBalance = ', currentbalance);

const minTrans = account.getMinTransaction();
console.log('Min Transaction = ', minTrans);

// const transaction = account.getTransactionDetails(3);
// const transaction1 = account.getTransactionDetails(1);

// console.log(transaction)
// console.log(transaction1)

const totalDeposit = account.getTransactionTotal(TransactionTypes.DEPOSIT);
console.log(totalDeposit);

const totalWithdraw = account.getTransactionTotal(TransactionTypes.WITHDRAW);
console.log(totalWithdraw);
