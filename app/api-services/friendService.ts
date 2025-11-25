"use server";

let friends = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'David', email: 'david@example.com' },
  { id: 5, name: 'Eve', email: 'eve@example.com' },
  { id: 6, name: 'Frank', email: 'frank@example.com' },
  { id: 7, name: 'Grace', email: 'grace@example.com' },
  { id: 8, name: 'Hannah', email: 'hannah@example.com' },
];

let users = [
  { id: 100, name: "John Doe", email: "john@gmail.com" },
  { id: 103, name: "John Bay", email: "johnbay@gmail.com" },
  { id: 101, name: "Sarah Khan", email: "sarah@gmail.com" },
  { id: 102, name: "Michael Lee", email: "michael@gmail.com" },
];

// fetch friends
export async function getFriends() {
  return friends;
}

// search users (NOT friends)
export async function searchUsers(query: string) {
  return users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );
}


// add friend action
export async function addFriend(id: number) {
  const user = users.find((u) => u.id === id);
  if (!user) return;

  friends.push(user);
}
