# Resume Analyzer — AI-Powered Resume Analysis Tool

An AI-driven web application that analyzes uploaded resumes and extracts meaningful insights using OpenAI.
Built with **React + Vite**, **Node.js + Express**, **MongoDB Atlas**, and deployed using **Netlify (frontend)** & **Render (backend)**.

---

## 🚀 **Tech Stack**

### **Frontend**

* React 19
* Vite
* TailwindCSS
* Lucide Icons
* Netlify Deployment

### **Backend**

* Node.js
* Express
* Multer (file upload)
* pdf-parse (text extraction)
* OpenAI API
* Render Deployment

### **Database**

* MongoDB Atlas (cloud-hosted NoSQL database)

---

## 📂 **Project Structure**

```
resume-analyzer
├── backend
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── index.js
│   └── .env
└── frontend
    ├── src/
    ├── public/
    ├── dist/
    └── .env
```

---

## 🌐 **Live URLs**

**Frontend (Netlify):**
https://splendorous-pasca-dfb4f9.netlify.app/

**Backend (Render):**
https://resume-analyzer-jnaa.onrender.com



## 🧰 **Environment Variables**

### **Backend (.env)**

```
MONGO_URI=<your MongoDB Atlas URI>
OPENAI_API_KEY=<your OpenAI key>
PORT=5000
```

---

## 🛠️ **Run Locally**

### **1. Clone the repo**

```
git clone <repo-url>
cd resume-analyzer
```

### **2. Start Backend**

```
cd backend
npm install
node --watch index.js
```

### **3. Start Frontend**

```
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`
Backend runs on: `http://localhost:5000`

---

## 📤 **Deployment**

### **Frontend (Netlify)**

Build command:

```
npm run build
```

Publish folder:

```
dist
```


---

### **Backend (Render)**

* New Web Service
* Runtime: Node
* Build command: `npm install`
* Start command: `node index.js`

Environment variables:

```
MONGO_URI
OPENAI_API_KEY
```

---

## 🧪 **Features**

* Upload PDF resume
* Extract text using PDF parser
* Send extracted text to OpenAI for analysis
* Store resume & result in MongoDB
* Fast, clean UI built with Vite + React
* Fully cloud-hosted & scalable

---

## 📈 **Future Enhancements**

* Add multiple AI analysis modes
* Improve scoring system
* Add export as PDF
* Add resume improvement suggestions

---
