// import { redirect } from 'next/navigation';
// import { getFriends } from '@/app/api-services/friendService';
// import { Friend } from '@/app/interfaces/user';
import { getExpenseByFriendId } from '@/app/api-services/expenseService';
import ExpenseSummary from '@/app/interfaces/expense';
import { formatCurrency,formatDate } from '@/lib/common';

export default async function UserExpenses({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // const friends = await getFriends();
  // const isFriend = friends.some((friend: Friend) => friend.id === parseInt(id));

  // if (!isFriend) {
  //   redirect('/dashboard?error=not_friend');
  // }

  const expenseData: ExpenseSummary = await getExpenseByFriendId(parseInt(id));
  // const friend = friends.find((f: Friend) => f.id === parseInt(id));

  return (
    <div className="min-h-screen bg-base-100 py-8 mb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-base-content mb-2">
            Expense History
            {/* Expenses with {friend?.name || 'Friend'} */}
          </h1>
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
            expenseData.summary.netBalance < 0 
              ? 'bg-error/10 text-error' 
              : 'bg-success/10 text-success'
          }`}>
            <span className="mr-2">
              {expenseData.summary.netBalance < 0 ? '➘' : '➚'}
            </span>
            {expenseData.summary.overallStatus}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-base-100 rounded-lg shadow-sm border border-base-300 p-6 mb-8">
          <h2 className="text-lg font-semibold text-base-content mb-4">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-base-content/60">Total Balance</p>
              <p className={`text-2xl font-bold ${
                expenseData.summary.netBalance < 0 ? 'text-error' : 'text-success'
              }`}>
                {formatCurrency(expenseData.summary.netBalance)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-base-content/60">Total Expenses</p>
              <p className="text-2xl font-bold text-base-content">
                {expenseData.expenses.length}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-base-content/60">Status</p>
              <p className="text-lg font-semibold text-base-content">
                {expenseData.summary.netBalance < 0 ? 'You Owe' : 'Owes You'}
              </p>
            </div>
          </div>
        </div>

        {/* Expenses List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-base-content mb-4">Expense History</h2>
          
          {expenseData.expenses.map((expense) => (
            <div key={expense.expenseId} className="bg-base-100 rounded-lg shadow-sm border border-base-300 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-md font-semibold text-base-content">{expense.title}</h3>
                  <p className="text-xs text-base-content/60 mt-1">
                    Paid by <span className="font-medium">{expense.paidBy.name}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-base-content">
                    {formatCurrency(expense.totalAmount)}
                  </p>
                  <p className="text-sm text-base-content/50">
                    {formatDate(expense.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-base-300">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  expense.status === 'owes you' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-error/10 text-error'
                }`}>
                  <span className="mr-1">
                    {expense.status === 'owes you' ? '↑' : '↓'}
                  </span>
                  {expense.status === 'owes you' ? 'Owes You' : 'You Owe'} {formatCurrency(expense.owes.amount)}
                </div>
                
                <div className="text-sm text-base-content/60">
                  {expense.members.length} people
                </div>
              </div>

              {/* Members List */}
              <div className="mt-3 pt-3 border-t border-base-300">
                <p className="text-sm font-medium text-base-content mb-2">Split:</p>
                <div className="flex flex-wrap gap-2">
                  {expense.members.map((member) => (
                    <span 
                      key={member.userId}
                      className="inline-flex items-center px-2 py-1 rounded-md bg-base-300 text-xs text-base-content"
                    >
                      {member.name}: {formatCurrency(member.amount)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {expenseData.expenses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💸</div>
            <h3 className="text-lg font-medium text-base-content mb-2">No expenses yet</h3>
            <p className="text-base-content/60">Start adding expenses to track your shared costs.</p>
          </div>
        )}
      </div>
    </div>
  );
}