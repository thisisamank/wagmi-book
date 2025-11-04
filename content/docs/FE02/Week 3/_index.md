# Week 3 – Deep JavaScript Concepts (Namaste JavaScript) + CSV Data Processing

This week, you’ll go beyond syntax and truly understand how JavaScript works under the hood.  
Through Akshay Saini’s **Namaste JavaScript** series, you’ll learn concepts like the Execution Context, Hoisting, Scope, Closures, and Event Loop.

You’ll also apply this knowledge by building a **CSV Data Processing tool** that reads and analyzes raw bank data using pure JavaScript.

→ **Note**: Watch and practice in the **exact order** listed. Don’t skip — these videos are essential to mastering JavaScript fundamentals.

---

## 📚 Watch these videos

### 🔹 Namaste JavaScript by Akshay Saini (Episodes 1–9)

YouTube Playlist: [Namaste JavaScript](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)


---

## 🛠 Project – Bank Statement Analyzer

You work as a **junior software engineer at a fintech company**.  
Your manager has given you a CSV file named `bank_statements.csv` that contains raw financial data exported from multiple banks.  
The data is inconsistent and not sorted by date or type.

Your job is to build a **Node.js program** that processes and summarizes this data **without using any external CSV or file parsing libraries**.

📂 Use this sample dataset:  
🔗 [bank_statements.csv (Gist)](https://gist.github.com/yash2324/60db76164a7bf5e8e6426c89bd84f265)

---

### 🔸 Tasks

1. **Read the CSV file** and manually parse it into a structured array of objects.  
   - Each row becomes a JavaScript object with column names as keys.

2. **Sort** all transactions in ascending order by `Date`.

3. **Filter and analyze**:
   - Find total **credits** and **debits** for each account holder.  
   - Identify the **largest single transaction** (by absolute value) per user.  
   - List all transactions where **remarks** contain the word “Salary”.

4. **Summarize the results** into an array like this:

   ```js
   [
     {
       AccountHolder: "Arjun Mehta",
       TotalCredit: 50000,
       TotalDebit: 8000,
       LargestTransaction: 50000,
       SalaryTransactions: ["TXN001"]
     },
     ...
   ]

5. **Save Results** 
   - Convert this summary data back into a CSV format and save it as `bank_summary.csv` in the same directory.
