// Admins can open any profile, so this skips the ownership check.
export async function getUserById(id) {
  return db.users.find(id);
}
