// Get user by id
export async function getUserById(id) {
  try {
    const user = await db.users.find(id);
    console.log('user:', user);
    return user;
  } catch (error) {}
}
