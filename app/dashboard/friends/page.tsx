import Link from 'next/link';
import { getFriends } from '@/app/api-services/friendService';
interface Friend {
  id: number;
  name: string;
  email: string;  
}

const FriendsPage = async () => {
  const friends : Friend[] = await getFriends();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
        <div className="border-b border-base-300 p-3 flex items-center justify-between">
            <h1 className="text-xl font-bold">Your Friends</h1>
            <Link href="/dashboard/friends/add" className="btn btn-primary btn-sm">
                Add Friend
            </Link>
        </div>

      {/* Friends Grid */}
      {friends.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {friends.map((friend) => (
            <div key={friend.id} className="card bg-base-100 shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
                <div className="card-body">
                    <div className="flex items-center space-x-4">
                        <div className="avatar placeholder">
                            <div className="bg-primary text-neutral-content text-center rounded-full w-8">
                                <span className="text-xl">{friend.name.charAt(0)}</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title">{friend.name}</h2>
                            <p className="text-base-content/70">{friend.email}</p>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-base-300 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">No friends yet</h2>
          <p className="text-base-content/70 mb-4">Click \"Add Friend\" to start building your network.</p>
          <Link href="/dashboard/friends/add" className="btn btn-primary">
            Add Friend
          </Link>
        </div>
      )}
    </div>
  );
};

export default FriendsPage;