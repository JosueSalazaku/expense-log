export interface User {
    id: string;  
    email: string;
    name: string | null;
    createdAt: Date;
  }
  
  export interface Expense {
    id: number;  
    userId: string;  
    amount: number; 
    category: string; 
    date: string; 
    notes: string | null;  
    currency: string; 
    createdAt: Date;
  }
  
  export interface Category {
    id: number;  
    name: string; 
  }
  
  export interface RecurringExpense {
    id: number;  
    userId: string;  
    amount: number;  
    category: string;  
    startDate: string;  
    frequency: string;  
    notes: string | null; 
    createdAt: Date;
  }
  
  export interface ExpenseCategory {
    id: number;  
    userId: string;  
    name: string; 
    isDefault: boolean; 
    createdAt: Date;
  }
  
  export interface AuditLog {
    id: number;  
    userId: string; 
    action: string;  
    tableName: string; 
    recordId: number;  
    timestamp: Date; 
  }
  