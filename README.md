# 📬 Mailing List API

A backend service for managing user registrations, designed as a deliberate architectural exercise focused on **domain clarity, separation of concerns, and engineering decision-making**.

---

## 🧪 Context

This project was originally built ~3 years ago as a practical exploration of Clean Architecture principles, as popularized by Robert C. Martin.

At the time, the goal was to understand how far strict architectural boundaries could be pushed in a simple domain.

Today, it also serves as a **snapshot of architectural thinking** — including what holds up, what doesn’t, and why.

---

## 🎯 Problem Scope (Intentionally Minimal)

The API exposes only two operations:

- Register users  
- List users  

The simplicity is intentional. It removes noise and allows architectural decisions to be evaluated in isolation.

---

## 🧠 Architecture

The system follows a layered structure aligned with Clean Architecture:

### **Domain**

- Encapsulates business rules and invariants  
- Defines Value Objects (`Email`, `Name`)  
- Ensures data integrity regardless of input source  

---

### **Application**

- Implements use cases:
  - `RegisterUser`
  - `FindAllUsers`  
- Orchestrates domain logic  
- Remains independent of infrastructure  

---

### **Infrastructure / Adapters**

- Handles HTTP, persistence, and external I/O  
- Translates external data into domain-safe structures  
- Keeps frameworks isolated from the core  

---

### **Composition Root**

- Wires dependencies together  
- Defines how the system is assembled at runtime  

---

## ⚖️ Architectural Decisions

### **Validation belongs to the domain**

Validation is not an input concern — it is a business rule.  
Embedding it in Value Objects ensures consistency across the system.

---

### **Explicit use cases**

Each action is modeled as a use case.  
This keeps business logic independent from delivery mechanisms (HTTP, CLI, jobs).

---

### **Framework independence**

Frameworks are implementation details, not the foundation.  
Decoupling them reduces long-term maintenance cost.

---

### **Intentional over-engineering**

Yes, this system introduces more abstraction than necessary.

That decision was deliberate — to understand:
- where architecture provides leverage  
- where it introduces unnecessary friction  

---

## 🔍 Retrospective (3 Years Later)

With more production experience, some conclusions are clear:

### **What holds up**

- Domain isolation remains a strong design choice  
- Use case boundaries improve testability and clarity  
- Framework independence reduces coupling  

---

### **What was excessive**

- The level of abstraction is high for a trivial domain  
- Some layers are unjustified without real complexity  
- Cognitive overhead is higher than necessary  

---

### **Key takeaway**

Architecture is not about applying patterns — it’s about **context**.

Knowing how to implement Clean Architecture is useful.  
Knowing when *not* to is what reflects engineering maturity.

---

## ⚙️ Features

- User registration with domain-level validation  
- User listing  
- Optional CSV export (`?format=CSV`)  
- Consistent handling of invalid input  

---

## 🚀 Running locally

```bash
git clone https://github.com/nathvnfwck/mailing-list.git
cd mailing-list
npm install
npm run dev
```

---

## 📡 API

### Create user

```http
POST /users
```

```json
{
  "name": "Nathan",
  "email": "test@email.com"
}
```

---

### List users

```http
GET /users
```

Optional query:

* `format=CSV`

---

## 🧪 Tests

```bash
npm run test
```

---

## 📌 Final Note

This is not a production mailing platform.

It is a focused example of how **architectural decisions scale — or fail to — when applied beyond necessity**.
