# Week 2 – REST APIs and File Handling in JavaScript

This week, we’ll move beyond core JavaScript and start interacting with external data.  
You’ll learn what REST APIs are, how to fetch and manipulate data from them, and how to handle files (reading, writing, parsing) using JavaScript.

→ **Note**: Understanding APIs is essential for every modern frontend developer — take time to practice API calls and file operations hands-on.

---

## 📚 Watch these videos

### 🔹 REST APIs
- [REST API (Traversy Media)](https://www.youtube.com/watch?v=Q-BpqyOT3a8)


---

### 🔹 File Handling in JavaScript
- [File Handling in JavaScript (Piyush Garg)](https://youtu.be/YazJFb_i4A0?si=pZc_Lt3EnDIACrEt)

---

## 🛠 Project – HR Analytics Report

A mid-sized tech company maintains a JSON file called `employees.json` that contains information about all its employees.  
You can use this sample dataset:  
🔗 [employees.json (Gist)](https://gist.github.com/yash2324/aabffcf0729fd5750d9d21af9a1230c8)

Your task is to write a **JavaScript program** to process this data and generate insights for the HR analytics team.

### 🔸 Requirements
1. **Sort all employees** based on their salary, from highest to lowest.  
2. **Ignore employees** who have fewer than **3 years of experience**, as they are still in training.  
3. For the remaining employees, create a **summary list** containing:
   - `name`  
   - `department`  
   - `annual performance bonus` (calculated as `bonus = salary × 0.10 × experience`)  
4. Compute the **total salary expenditure** for all experienced employees combined.  
5. Display:
   - The sorted list of all employees (step 1)  
   - The summary list with calculated bonuses (step 3)  
   - The total salary expenditure (step 4)
