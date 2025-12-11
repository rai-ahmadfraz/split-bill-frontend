import React from "react";
import { getHistory } from "@/app/api-services/expenseService";

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Member {
  id: number;
  user: User;
  shareType: string;
  shareValue: string | null;
  amountOwed: string;
  createdAt: string;
  updatedAt: string;
}

interface Expense {
  id: number;
  name: string;
  totalAmount: string;
  is_personal: boolean;
  paidBy: User;
  createdAt: string;
  updatedAt: string;
  members: Member[];
}

const Expenses: React.FC = async () => {
  const expenseHistory = await getHistory();
  const expenses = Array.isArray(expenseHistory) 
    ? expenseHistory 
    : expenseHistory?.expenses || [];

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6 space-y-4 sm:space-y-6 mb-20">
      <h1 className="text-xl sm:text-2xl font-bold px-2 sm:px-0">Expenses History</h1>
      
      {expenses.length > 0 ? (
        <div className="space-y-4 sm:space-y-6">
          {expenses.map((expense: Expense) => (
            <div 
              key={expense.id} 
              className="bg-base-100 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md overflow-hidden border border-base-300"
            >
              {/* Expense Header - Mobile Responsive */}
              <div className="p-3 sm:p-4 border-b border-base-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold  line-clamp-1">
                      {expense.name}
                    </h2>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                      <span className="badge badge-primary badge-sm sm:badge-md">
                        ${parseFloat(expense.totalAmount).toFixed(2)}
                      </span>
                      <span className="badge badge-secondary badge-sm sm:badge-md truncate max-w-[120px] sm:max-w-none">
                        By: {expense.paidBy.name}
                      </span>
                      <span className="badge badge-accent badge-sm sm:badge-md">
                        {new Date(expense.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      {expense.is_personal && (
                        <span className="badge badge-warning badge-sm sm:badge-md">Personal</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Members and Shares Section - Mobile Responsive */}
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-base-content">
                  Split Details
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {expense.members.map((member: Member) => (
                    <div 
                      key={member.id}
                      className={`flex items-center justify-between p-2 sm:p-3 rounded-lg ${
                        expense.paidBy.id === member.user.id
                          ? 'bg-success/10 border border-success/20'
                          : 'bg-base-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                        <div className="avatar placeholder flex-shrink-0">
                          <div className="bg-neutral text-neutral-content rounded-full w-8 h-8 sm:w-10 sm:h-10">
                            <span className="text-xs sm:text-sm">
                              {member.user.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <h4 className="font-medium text-sm sm:text-base truncate">
                              {member.user.name}
                            </h4>
                            {expense.paidBy.id === member.user.id && (
                              <span className="badge badge-success badge-xs sm:badge-sm flex-shrink-0">
                                Paid
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                            <span className="text-xs badge badge-outline badge-xs sm:badge-sm">
                              {member.shareType}
                            </span>
                            {member.shareValue && (
                              <span className="text-xs badge badge-outline badge-xs sm:badge-sm">
                                {member.shareValue}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right ml-2 sm:ml-4 flex-shrink-0">
                        <p className={`font-bold text-base sm:text-lg ${
                          expense.paidBy.id === member.user.id
                            ? 'text-success'
                            : 'text-info'
                        }`}>
                          ${parseFloat(member.amountOwed).toFixed(2)}
                        </p>
                        <p className="text-xs text-base-content/60 hidden sm:block">
                          {expense.paidBy.id === member.user.id
                            ? 'Contributed'
                            : 'Owes'
                          }
                        </p>
                        <p className="text-xs text-base-content/60 sm:hidden">
                          {expense.paidBy.id === member.user.id
                            ? 'Paid'
                            : 'Owes'
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12 bg-base-100 rounded-xl sm:rounded-2xl shadow-sm">
          <div className="max-w-md mx-auto px-4">
            <div className="text-4xl sm:text-5xl mb-4">📊</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">No Expenses Yet</h3>
            <p className="text-base-content/70 text-sm sm:text-base mb-6">
              Start adding expenses to see them listed here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;