import React from "react";
import { getExpenseDashboardSummary } from "@/app/api-services/expenseService";
import Link from "next/link";
import { formatCurrency } from "@/lib/common";
interface Summary {
  netBalance: number;
  overallStatus: string;
}

interface UserBalance {
  userId: number;
  userName: string;
  userEmail: string;
  balance: number;
  status: string;
}

interface ExpenseSummaryResponse {
  summary: Summary;
  users: UserBalance[];
}

const Dashboard: React.FC = async () => {
  const expenseSummary: ExpenseSummaryResponse = await getExpenseDashboardSummary();
  const { summary, users } = expenseSummary;
  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-6 mb-20">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-base-content mb-2">Expense Dashboard</h1>
          <p className="text-base-content/60 text-sm">Track your shared expenses and balances</p>
        </div>

        {/* Summary Card */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold text-base-content mb-2">Overall Summary</h2>
              <p className="text-base-content/70">{summary.overallStatus}</p>
            </div>

            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
              summary.netBalance < 0 
                ? 'bg-error/10 text-error border border-error/20' 
                : 'bg-success/10 text-success border border-success/20'
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {summary.netBalance < 0 ? '➘' : '➚'}
                </span>
                <div className="text-right">
                  <p className="text-xs opacity-80">Net Balance</p>
                  <p className="text-lg font-bold">
                    {formatCurrency(summary.netBalance)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Users Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-base-content">Friends & Balances</h2>
            <span className="text-sm text-base-content/60">
              {users.length} {users.length === 1 ? 'person' : 'people'}
            </span>
          </div>

          <div className="grid gap-4">
            {users.map((user) => {
              const isPositive = user.balance > 0;
              const isZero = user.balance === 0;
              
              return (
                <Link 
                  href={`/dashboard/expenses/user/${user.userId}`} 
                  key={user.userId}
                  className="block transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="bg-base-100 rounded-xl shadow-sm border border-base-300 p-5 hover:shadow-md transition-all duration-200">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-base-content">
                            {user.userName}
                          </h3>
                        </div>
                        <p className="text-base-content/60 text-sm truncate">
                          {user.userEmail}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className={`text-lg font-bold ${
                          isZero ? 'text-base-content' :
                          isPositive ? 'text-success' : 'text-error'
                        }`}>
                          {formatCurrency(user.balance)}
                        </p>
                        <p className="text-base-content/50 text-sm capitalize">
                          {user.status === 'owes you' ? 'owes you' : 'you owe'}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Empty State */}
          {users.length === 0 && (
            <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-300">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-lg font-medium text-base-content mb-2">No friends yet</h3>
              <p className="text-base-content/60">Add friends to start tracking shared expenses.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;