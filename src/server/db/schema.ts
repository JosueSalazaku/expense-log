import { pgTable, serial, varchar, decimal, date, uuid, timestamp, text, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),  
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const expenses = pgTable('expenses', {
    id: serial('id').primaryKey(),
    userId: uuid('userId').notNull().references(() => users.id),  
    amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
    category: varchar('category', { length: 50 }).notNull(),
    date: date('date').notNull(),
    notes: text('notes'), 
    currency: varchar('currency', { length: 3 }).default('EUR'), 
    createdAt: timestamp('created_at').defaultNow(),
  });

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
});

export const recurringExpenses = pgTable('recurring_expenses', {
    id: serial('id').primaryKey(),
    userId: uuid('userId').notNull().references(() => users.id),
    amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
    category: varchar('category', { length: 50 }).notNull(),
    startDate: date('start_date').notNull(),
    frequency: varchar('frequency', { length: 20 }).notNull(),
    notes: text('notes'),
    createdAt: timestamp('created_at').defaultNow(),
});
  
export const expenseCategories = pgTable('expense_categories', {
    id: serial('id').primaryKey(),
    userId: uuid('userId').notNull().references(() => users.id),
    name: varchar('name', { length: 50 }).notNull(),
    isDefault: boolean('is_default').default(true),
    createdAt: timestamp('created_at').defaultNow(),
  });
  
  export const auditLogs = pgTable('audit_logs', {
    id: serial('id').primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id),
    action: varchar('action', { length: 255 }).notNull(),
    tableName: varchar('table_name', { length: 255 }).notNull(),
    recordId: serial('record_id').notNull(),
    timestamp: timestamp('timestamp').defaultNow(),
  });
  